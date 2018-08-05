
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const appkeys = require('./keys.js');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const moment = require('moment');

var tempfile = require('tempfile');
var officegen = require('officegen');
var docx = officegen('docx');


const REFRESH_INTERVAL = 10000*60;
let connectTime = moment();
let lastActiveTime = moment();

process.env['NODE_ENV'] = 'production';

const connection = mysql.createConnection({
    host: appkeys.db.host,
    port: appkeys.db.port,
    user: appkeys.db.username,
    password: appkeys.db.password,
    database: appkeys.db.database,

    // host: appkeys.local_db.host,
    // port: appkeys.local_db.port,
    // user: appkeys.local_db.username,
    // password: appkeys.local_db.password,
    // database: appkeys.local_db.database,
    
});

const RESULT_STATUS = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};


function initDBConnection() {
    connectTime = moment();
    lastActiveTime = moment();
    connection.connect(err => {
        if (err) {
            console.log('Error Connection | ' + err.stack);
            return;
        }
        console.log('Connected as Id : ' + connection.threadId);
    });
    connection.on('error', function(err) {
        if (err.fatal)
            initDBConnection();
    });
}


// Serve static files from the React app
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Put all API endpoints under '/api'

const idleCheck = (req,res,next)=>{
    console.log(' IDLE CHECK ');
    lastActiveTime = moment();
    next();
}

app.use(idleCheck);


app.get('/callback', (req, res) => {
    res.send({ express: 'Callback reached!' });
});
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' + new Date() });
});
app.get('/api/authContent', (req, res) => {
    res.send({ express: 'Hello Post the Authentication' });
});

app.get('/api/db/start', (req, res) => {
    if (connection.threadId) {
        res.send(' DB Connection is Open !!');
    } else {
        initDBConnection();
    }
});
app.get('/api/db/close', (req, res) => {
    if (connection.threadId) {
        connection.end(err => {
            if (err) {
                res.send(' DB Connection Close request Successful !!');
            }
            res.send(' DB Connection is Closed');
        });
    } else {
        res.send(' DB Connection Close request Failed !!');
    }
});
app.get('/api/db', (req, res) => {
    if (connection.threadId) {
        res.send({ data: 'Data Request Here | ' + appkeys.db.database });
    } else {
        res.send({ data: 'DB Connection failed. Please check with administrator'                                                                                         });
    }
});

const returnResult = (err, data) => {
    let resultObj = {
        status: RESULT_STATUS.ERROR,
        data: [],
        error: '',
    };
    if (err) {
        resultObj.error = err;
        //console.log(err);
    } else {
        resultObj.status = RESULT_STATUS.SUCCESS;
        resultObj.data = data;
        //console.log(JSON.stringify(data));
    }
    return resultObj;
};

app.put('/api/query/sales', (req, res) => {
    /* STATUS, DATA, ERR */
    console.log("params", req.body.params);
    let params = req.body.params;
    connection.query(params.statement, [params.status, params.bid_number], (error, result, fields) => {
        res.send(returnResult(error, result));
    });
});

app.get('/api/query/sales/:bid_number', (req, res) => {
    console.log("bid", req.params.bid_number);
    /* STATUS, DATA, ERR */
    let bid_number = connection.escape(req.params.bid_number);
    let sql = 'select * from sales where bid_number= '.concat(bid_number);
    //console.log(sql);
    connection.query(sql, (error, result, fields) => {
        res.send(returnResult(error, result));
    });
});



app.get('/api/query/:ds', (req, res) => {
    console.log("ds", req.params.ds);
    /* STATUS, DATA, ERR */
    let tableName = connection.escape(req.params.ds);
    let sql = 'select * from '.concat(req.params.ds);
    //console.log(sql);
    connection.query(sql, (error, result, fields) => {
        res.send(returnResult(error, result));
    });
});

app.get('/api/count/:ds', (req, res) => {
    console.log("ds", req.params.ds);
    /* STATUS, DATA, ERR */
    let tableName = connection.escape(req.params.ds);
    let sql = 'select count(*) as count from '.concat(req.params.ds);
    //console.log(sql);
    connection.query(sql, (error, result, fields) => {
        res.send(returnResult(error, result));
    });
});

app.post('/api/latest', (req, res) => {
    
    /* STATUS, DATA, ERR */
    let statement = req.body.params.statement;
    let sales_id = req.body.params.sales_id;
    
    //let sql = 'select * from ? where sales_id = 28 order by quote_id DESC limit 1';
    //console.log(sql);
    connection.query(statement, [sales_id], (error, result, fields) => {
        console.log("yum", result);
        res.send(returnResult(error, result));
    });
});

app.post('/loginRequest', (req, res) => {
    console.log('***** LOGIN REQUEST ****** | ' + JSON.stringify(req.body));
    let queryObj = req.body;
    console.log("queryobj",queryObj);
    connection.query(
        queryObj.statement,
        [queryObj.username,
        queryObj.password],
        (error, result, fields) => {
            //console.log("error, result, fields", error, result, fields);
            if (error || !result.length) {
                console.log('*** LOGIN ERROR *** | ' + JSON.stringify(error));
                res.send(result);
            } else {
                console.log('*** LOGIN SUCCESS *** | ' + JSON.stringify(result))                                                                                        ;
                resultObj = {
                    user_token: result[0].user_token,
                    user_password: result[0].user_password,
                    user_role_code: result[0].user_role_code,
                };
                res.send(resultObj);
            }
        },
    );
});
app.post('/api/insertRequest', (req, res) => {
    var data = req.body.params.data;
    var statement = req.body.params.statement;
    var statement_2 = req.body.params.statement_2;

    console.log("data", data);

    //let statement = "UPDATE sales SET inclusion=?, exclusion=?,main_steel_est_schedule=?,main_steel_hours=?,misc_steel_est_schedule=?, misc_steel_hours=?,status=?,bid_type=?,quote_price=?,engg_price=?,comments=? WHERE bid_number=?";
    
    var query = connection.query(
        statement,
        data,
        (error, result, fields) => {
            if (error) {
                console.log('*** INSERT ERROR *** | ' + error);
                res.send(error);
            } else {
                console.log('*** INSERT SUCCESS *** | ' + JSON.stringify(result));
                res.send(result);
            }
        },
    );

    var query = connection.query(
        statement_2,
        [data, data.sales_id],
        (error, result, fields) => {
            if (error) {
                console.log('*** INSERT ERROR *** | ' + error);
            } else {
                console.log('*** INSERT SUCCESS *** | ' + JSON.stringify(result));
            }
        },
    );
});



app.post('/api/addFabricator', (req, res) => {
    let fabricator = req.body.params.fabricator;
    let statement = req.body.params.statement;
    console.log("fabricator", fabricator, statement);
    
    var query = connection.query(
        statement,
        fabricator,
        (error, result, fields) => {
            if (error) {
                console.log('*** INSERT ERROR *** | ' + error);
                res.send(error);
            } else {
                console.log('*** INSERT SUCCESS *** | ' + JSON.stringify(result));
                res.send(result);
            }
        },
    );
});

app.post('/api/updateRequest/', (req, res) => {
    console.log('***** UPDATE REQUEST ****** | ' + JSON.stringify(req.body));
    var updateObj = req.body;

    connection.query(
        updateObj.statement,
        updateObj.values,
        (error, result, fields) => {
            if (error) {
                console.log('*** UPDATE ERROR *** | ' + error);
            } else {
                console.log('*** UPDATE SUCCESS *** | ' + JSON.stringify(result)                                                                                        );
            }
            res.send(result);
        },
    );
});

//docx generator
app.get('/docx', function(req, res){
    var tempFilePath = tempfile('.docx');
    docx.setDocSubject ( 'testDoc Subject' );
    docx.setDocKeywords ( 'keywords' );
    docx.setDescription ( 'test description' );

    var pObj = docx.createP({align: 'center'});
    pObj.addText('Policy Data', {bold: true, underline: true});

    docx.on('finalize', function(written) {
        console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
    });
    docx.on('error', function(err) {
        console.log(err);
    });

   res.writeHead ( 200, {
    "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
    'Content-disposition': 'attachment; filename=testdoc.docx'
    });
    docx.generate(res);
});


app.post('/api/upsert/:ds', (req, res) => {
    /* STATUS, DATA, ERR */
    let result = {
        status: RESULT_STATUS.ERROR,
        data: [],
        error: '',
    };
    res.send(result);
});
app.post('/api/delete/:ds', (req, res) => {
    /* STATUS, DATA, ERR */
    let result = {
        status: RESULT_STATUS.ERROR,
        data: [],
        error: '',
    };
    res.send(result);
});

app.get('**', function(req, res, next) {
    //Path to your main file
    res.status(200).sendFile(path.join(__dirname+'/public/index.html')); 
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Up! | '+process.env.NODE_ENV)
});

console.log(`Server generator listening on ${port}`);  