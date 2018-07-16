import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { LeadData } from '../components/new-lead/new-lead.component';
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
    this.saleInsertUrl = "http://localhost:5000/api/insertRequest";
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

  register(data:any){
    console.log("service", Object.values(data));
    const params = new URLSearchParams();
    let statement: string = "insert into sales (bid_number, status, bid_type ,document_path, document_received, exclusion, executive,fabricator_address, fabricator, inclusion,main_steel_est_schedule,main_steel_hours,misc_steel_est_schedule,misc_steel_hours,fabricator_phone,bid_received_date,bid_received_from,bid_sent_date,fabricator_Url) values ? ";
    //params.append('Content-Type', 'application/json');
    params.append('statement', statement);
    params.append('bid_number', data.bid_number);
    params.append('status', data.status);
    params.append('bid_type', data.bid_type);
    params.append('document_path', data.document_path);
    params.append('document_received', data.document_received);
    params.append('exclusion', data.exclusion);
    params.append('executive', data.executive);
    params.append('fabricator_address', data.fabricator_address);
    params.append('fabricator', data.fabricator);
    params.append('inclusion', data.inclusion);
    params.append('main_steel_est_schedule', data.main_steel_est_schedule);
    params.append('main_steel_hours', data.main_steel_hours);
    params.append('misc_steel_est_schedule', data.misc_steel_est_schedule);
    params.append('misc_steel_hours', data.misc_steel_hours);
    params.append('fabricator_phone', data.fabricator_phone);
    params.append('bid_received_date', data.bid_received_date);
    params.append('bid_received_from', data.bid_received_from);
    params.append('bid_sent_date', data.bid_sent_date);
    params.append('fabricator_Url', data.fabricator_Url);

    console.log("url", this.saleInsertUrl);
    return this.http.post(this.saleInsertUrl, params) 
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
