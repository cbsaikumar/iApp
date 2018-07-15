declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var $ = require('jquery');
var dt = require('datatables.net');
class Inclusion {
  constructor(public value: string = '',
              public isChecked: boolean = false,
            ) {
  }
}

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './new-lead.component.scss']
})
export class NewLeadComponent implements OnInit {

  title: string = "Add Lead";
  showMenu: boolean;

  misc_inclusions: any[];
  misc_exclusions: any[];
  inclusions: {};
  exclusions: {};

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(
      private authService:AuthService, 
      private flashMessage: FlashMessagesService, 
      private router: Router
    ) {
  }

  register(newLeadForm){
    console.log("newLeadForm",newLeadForm.value);
  }

  ngOnInit() {

    this.authService.getInclusions().subscribe(data => {
      console.log("inclusions", data, typeof (data.data));
      this.misc_inclusions = data.data;      
    });

    this.authService.getExclusions().subscribe(data => {
      console.log("exclusions", data, typeof (data.data));
      this.misc_exclusions = data.data;      
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
