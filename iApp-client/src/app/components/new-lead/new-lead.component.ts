declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var $ = require('jquery');
var dt = require('datatables.net');
export class LeadData {
  constructor(public bid_number: number = 0, 
              public bid_received_date : Date = null, 
              public bid_received_from : string = '',
              public bid_sent_date : Date = null, 
              public bid_type : string = '', 
              public document_path : string = '', 
              public document_received : string = '',
              public exclusion : string='', 
              public executive : string = '', 
              public fabricator : string = '',
              public fabricator_Url : string = '',
              public fabricator_address : string = '',
              public fabricator_phone : string = '',
              public inclusion: string='',
              public main_steel_est_schedule : Date = null,
              public main_steel_hours : number = 0,
              public misc_steel_est_schedule : Date = null,
              public misc_steel_hours : number = 0,
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

  requirements: string[] = ["Structural", "Miscellaneous", "Engineering"];
  
  submitSuccess: boolean;
  submitted: boolean;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(
      private authService:AuthService, 
      private flashMessage: FlashMessagesService, 
      private router: Router
    ) {
  }

  register(newLeadForm:LeadData){
    console.log("newLeadForm",newLeadForm);
    let newLeadData : LeadData;
    newLeadData = newLeadForm;

    console.log("newLeadData",newLeadData);
    
    this.authService.register(newLeadData).subscribe((data)=>{
      console.log("subscribe", data);
      if(data.affectedRows>0){
        this.submitSuccess = !this.submitSuccess;
      }
      else{
        this.submitted = !this.submitted;
      }
    });
  }

  ngOnInit() {  
  };

  cancel(){
    history.back();
  }

  addRequirement(req, event){
    if(event.target.checked ===  true){
      this.requirements.push(req.value);
    }
    else{
      let index = this.requirements.indexOf(req.value);
      this.requirements.splice(index, 1);
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
