declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';



var $ = require('jquery');
var dt = require('datatables.net');
export class Estimation {
  constructor(
              public main_steel_hours : number = 0,
              public main_steel_est_schedule : Date,
              public misc_steel_hours : number = 0,
              public misc_steel_est_schedule : Date,
              public status : string = '',
              public comments : string = '',
              public sales_id : string = '',
              public inclusion : string = '',
              public exclusion : string = '',
            ) { }
}

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './estimation.component.css']
})
export class EstimationComponent implements OnInit {
  estimationInfoForm: FormGroup;

  title: string = "Estimation";
  showMenu: boolean;
  salesDetails: any;
  misc_inclusions: any[];
  misc_exclusions: any[];
  inclusions: any[] = [];
  exclusions: any[] = [];
  bidTypes: string[] = ['Structural', 'Miscellaneous', 'Engineering'];
  selectBidTypes : string[] = [];
  submitSuccess: boolean;
  submitted: boolean;
  bid_number : number;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;
  @ViewChild('estimation') estimation: ElementRef;


  constructor(
      private fb: FormBuilder,
      private authService:AuthService, 
      private flashMessage: FlashMessagesService, 
      private router: Router,
      private activateRoute : ActivatedRoute
    ) {
  }

  save(estimationForm : Estimation, canPublish: boolean){
    console.log("estimationForm",estimationForm);
    let sales_id = sessionStorage.getItem('sales_id');
    console.log('sales_id',sales_id);
    let newEstimationForm : Estimation;
    newEstimationForm = estimationForm;

    if(canPublish){
      newEstimationForm.status = "Estimate Received";
    }
    else{
      newEstimationForm.status = "Estimate Pending";
    }
   
    newEstimationForm.sales_id = sales_id;

    newEstimationForm.inclusion = this.inclusions.toString();
    newEstimationForm.exclusion = this.exclusions.toString();

    console.log("newEstimationForm",newEstimationForm);
    
    this.authService.addEstimation(newEstimationForm).subscribe((data)=>{
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

    this.authService.getInclusions().subscribe(data => {
      this.misc_inclusions = data.data;  
    });

    this.authService.getExclusions().subscribe(data => {
      this.misc_exclusions = data.data;   
    });  

    

    let bid_number = this.activateRoute.snapshot.params['bid_number'];
    console.log("got bid number as", bid_number);
    this.bid_number = bid_number;
    
    this.estimationInfoForm = this.fb.group({
      main_steel_hours: new FormControl(),
      main_steel_est_schedule: new FormControl(),
      comments: new FormControl(''),
      misc_steel_hours: new FormControl(),
      misc_steel_est_schedule: new FormControl()
    });

    //this.quoteInfoForm.disable();
  };

  addInclusion(inc, event){
    if(event.target.checked ===  true){
      this.inclusions.push(inc.value);
    }
    else{
      let index = this.inclusions.indexOf(inc.value);
      this.inclusions.splice(index, 1);
    }
    console.log(this.inclusions);
  }

  cancel(){
    history.back();
  }

  tryAgain(){
    this.submitSuccess =false;
    this.submitted = false;
  }

  addExclusion(exc, event){
    if(event.target.checked ===  true){
      this.exclusions.push(exc.value);
    }
    else{
      let index = this.exclusions.indexOf(exc.value);
      this.exclusions.splice(index, 1);
    }
    console.log(this.exclusions);
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
