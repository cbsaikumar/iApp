declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './roles.component.scss']
})
export class RolesComponent implements OnInit {

  title: string = "Roles";
  showMenu: boolean;
  usersData: any;
  rolesData: any;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(private authService:AuthService, private flashMessage: FlashMessagesService, private router: Router) {
   
  }

  ngOnInit() {
    this.authService.getRoles().subscribe(data => {
      console.log("roles", data, typeof (data.data));
      this.rolesData = data.data;

      $('#example').DataTable({
        data: this.rolesData,
        columns: [
          { data: 'role_code' },
          {
            data: 'role_name'
          }
        ]
      });
    });
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
