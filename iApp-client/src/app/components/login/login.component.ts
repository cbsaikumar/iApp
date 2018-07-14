import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { md5 } from '../../../md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService,  private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  login(loginForm){
    let username = loginForm.value.username;
    let password = loginForm.value.password;

    this.authService.login(username, password).subscribe((data) => {
      console.log(data);
      if(data && data.user_token){
        this.flashMessage.show("You are now logged in", {cssClass:'alert-success text-center', timeout: 5000});
        sessionStorage.setItem("user_role_code", data.user_role_code);
        sessionStorage.setItem("user_token", data.user_token);
        this.router.navigate(['sales']);
      }
      else{
        this.flashMessage.show("You are not authorized!", {cssClass:'alert-danger', timeout: 5000});
      }
    });
  }

}
