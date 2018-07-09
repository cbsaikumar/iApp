import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl: string; 

  constructor(private http: Http) { 
    this.loginUrl = "loginRequest";
  }

  login(request: any) {
    let username: string = request.username;
    let values: string = request.value;

    let statement: string = "select * from users where user_username = ? ";
    this.http.post(this.loginUrl, {statement, values});
  
  }
}
