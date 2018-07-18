
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


const REFRESH_INTERVAL = 10000*60;
let connectTime = moment();
let lastActiveTime = moment();

process.env['NODE_ENV'] = 'production';

const connection = mysql.createConnection({
    host: appkeys.local_db.host,
    port: appkeys.local_db.port,
    user: appkeys.local_db.username,
    password: appkeys.local_db.password,
    database: appkeys.local_db.database,
    
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
    var values = req.body;

    let valuesArray = []
    for(i in values){
        valuesArray.push(values[i]);
    }

    //let statement = "INSERT INTO sales (bid_number, fabricator,fabricator_Url,fabricator_phone,fabricator_address,bid_received_date,bid_received_from,bid_sent_date,document_received,document_path,status,executive,bid_type,main_steel_hours,main_steel_est_schedule,misc_steel_hours,misc_steel_est_schedule,inclusion,exclusion) SET ?";

    let statement = "INSERT INTO sales SET ?";


    //"CREATE TABLE sales (bid_number varchar(50), fabricator varchar(50),fabricator_Url varchar(50),fabricator_phone varchar(50),fabricator_address varchar(50),bid_received_date varchar(50),bid_received_from varchar(50),bid_sent_date varchar(50),document_received varchar(50),document_path varchar(50),status varchar(50),executive varchar(50),bid_type varchar(50),main_steel_hours varchar(50),main_steel_est_schedule varchar(50),misc_steel_hours varchar(50),misc_steel_est_schedule varchar(50),inclusion varchar(50),exclusion varchar(50));"
    let queryString = values.bid_number+''

    var query = connection.query(
        statement,
        values,
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