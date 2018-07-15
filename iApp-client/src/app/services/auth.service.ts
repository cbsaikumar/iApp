import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl: string; 
  private salesUrl: string; 
  private usersUrl: string; 
  private rolesUrl: string;
  private inclusionsUrl: string; 
  private exClusionsUrl: string; 
  private saleInsertUrl: string; 

  constructor(private http: Http) { 
    this.loginUrl = "http://localhost:5000/loginRequest";
    this.salesUrl = "http://localhost:5000/api/query/sales";
    this.usersUrl = "http://localhost:5000/api/query/users";
    this.rolesUrl = "http://localhost:5000/api/query/roles";
    this.inclusionsUrl = "http://localhost:5000/api/query/misc_inclusions";
    this.exClusionsUrl = "http://localhost:5000/api/query/misc_exclusions";

    this.saleInsertUrl = "http://localhost:5000/api/insertRequest/";
  }

  login(username: string, password: any) {

    const params = new URLSearchParams();

    let statement: string = "select * from users where user_username = ? and user_password = ? ";

    //params.append('Content-Type', 'application/json');
    params.append('statement', statement);
    params.append('username', username);
    params.append('password', password);

    console.log("params", params);

    return this.http.post(this.loginUrl, params)
      .map(res => res.json());
  };

  register(values:any[]){
    const params = new URLSearchParams();

    //let statement: string = "insert into sales (bid_number, bid_received_date ,bid_due_date ,bid_sent_date , executive ,status ,bid_type) values ? ";

    // //params.append('Content-Type', 'application/json');
    // params.append('statement', statement);
    // params.append('username', username);
    // params.append('password', password);

    console.log("params", params);

    return this.http.post(this.loginUrl, params)
      .map(res => res.json());

  }

  getUserInfo(){
    if(sessionStorage.getItem('user_role_code')){
      return sessionStorage.getItem('user_role_code');
    }
    else{
      return false;
    }
  }

  getSales(){
    return this.http.get(this.salesUrl)
      .map(res => res.json());
  }

  getUsers(){
    return this.http.get(this.usersUrl)
      .map(res => res.json());
  }

  getRoles(){
    return this.http.get(this.rolesUrl)
      .map(res => res.json());
  }

  getInclusions(){
    return this.http.get(this.inclusionsUrl)
      .map(res => res.json());
  }

  getExclusions(){
    return this.http.get(this.exClusionsUrl)
      .map(res => res.json());
  }

  logout(){
    sessionStorage.clear();
  }
}
