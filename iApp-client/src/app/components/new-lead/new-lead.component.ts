declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var $ = require('jquery');
var dt = require('datatables.net');
export class LeadData {
  constructor(public bid_number: string = '', 
              public bid_received_date : string = '', 
              public bid_received_from : string = '',
              public bid_sent_date : string = '', 
              public bid_type : string = '', 
              public document_path : string = '', 
              public document_received : string = '',
              public exclusion : any[], 
              public executive : string = '', 
              public fabricator : string = '',
              public fabricator_Url : string = '',
              public fabricator_address : string = '',
              public fabricator_phone : string = '',
              public inclusion: any[],
              public main_steel_est_schedule : string = '',
              public main_steel_hours : string = '',
              public misc_steel_est_schedule : string = '',
              public misc_steel_hours : string = '',
              public status : string = ''
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
  inclusions: any[] = [];
  exclusions: any[] = [];

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
    let newLeadData : LeadData;
    newLeadData = newLeadForm.value;

    newLeadData.inclusion = this.inclusions;
    newLeadData.exclusion = this.exclusions;
    console.log("newLeadData",newLeadData);
    
    this.authService.register(newLeadData);
    
  }

  ngOnInit() {

    this.authService.getInclusions().subscribe(data => {
      
      this.misc_inclusions = data.data;      
    });

    this.authService.getExclusions().subscribe(data => {
    
      this.misc_exclusions = data.data;      
    });   
  };

  addInclusion(inc, event){
    if(event.target.checked ===  true){
      this.inclusions.push(inc.value);
    }
    else{
      let index = this.inclusions.indexOf(inc.value);
      this.inclusions.splice(index, 1);
    }
  }

  addExclusion(exc, event){
    if(event.target.checked ===  true){
      this.exclusions.push(exc.value);
    }
    else{
      let index = this.exclusions.indexOf(exc.value);
      this.exclusions.splice(index, 1);
    }
  }

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
