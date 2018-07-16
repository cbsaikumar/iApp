declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './users.component.css']
})
export class UsersComponent implements OnInit {

  title: string = "Users";
  showMenu: boolean;
  usersData: any;
  rolesData: any;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(private authService:AuthService, private flashMessage: FlashMessagesService, private router: Router) {
   
  }

  ngOnInit() {
    this.authService.getUsers().subscribe(data => {
      console.log("sales", data, typeof (data.data));
      this.usersData = data.data;

      $('#example').DataTable({
        data: this.usersData,
        columns: [
          { data: 'user_name' },
          {
            data: 'user_email'
          },
          {
            data: 'user_contact_number'
          }
        ]
      });
    })
  };

  openNav() {
    this.showMenu = false;
    this.mySideNav.nativeElement.style.width = "250px";
    this.main.nativeElement.style.marginLeft = "250px";
  }

  closeNav() {
    this.showMenu = true;
    this.mySideNav.nativeElement.style.width = "0";
    this.main.nativeElement.style.marginLeft = "0";
  }

  logout(){
    sessionStorage.clear();
    this.flashMessage.show('You are logged out!', {cssClass:'alert-success text-center', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }


}