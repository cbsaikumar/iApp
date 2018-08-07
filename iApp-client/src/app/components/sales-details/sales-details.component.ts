declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {

  title: string = "Sales Data";
  public salesDetails: any;
  public quoteDetails : any;
  public estimationDetails : any;
  showMenu: boolean;
  public salesDetailsForm: FormGroup;
  public fabricatorInfoForm: FormGroup;
  public bidInfoForm: FormGroup;
  public quoteInfoForm: FormGroup;
  public estimationInfoForm: FormGroup;
  dataLoaded: boolean = false;
  bid_number : string;

  misc_inclusions: any[];
  misc_exclusions: any[];
  inclusions: any[] = [];
  exclusions: any[] = [];
  submitSuccess: boolean;
  submitted: boolean;
  message: string;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
    this.authService.getInclusions().subscribe(data => {
      
      this.misc_inclusions = data.data;      
    });

    this.authService.getExclusions().subscribe(data => {
    
      this.misc_exclusions = data.data;      
    });  
     
    this.bid_number = this.activeRoute.snapshot.params['bid_number'];
    console.log(this.activeRoute.snapshot.params['bid_number']);
    this.authService.getSalesDetails(this.bid_number).subscribe((data) => {
      if (data) {
        this.salesDetails = data.data[0];
        console.log(this.salesDetails);
        this.dataLoaded = true;
        sessionStorage.setItem("sales_id", this.salesDetails.sales_id);
    
        this.fabricatorInfoForm = this.fb.group({
          fabricator_name: new FormControl(this.salesDetails.fabricator_name),
          fabricator_website: new FormControl(this.salesDetails.fabricator_website),
          fabricator_address: new FormControl(this.salesDetails.fabricator_address),
          fabricator_phone: new FormControl(this.salesDetails.fabricator_phone),
          fabricator_email: new FormControl(this.salesDetails.fabricator_email),
          fabricator_contact_name: new FormControl(this.salesDetails.fabricator_contact_name)
        });
        this.bidInfoForm = this.fb.group({
          bid_number: new FormControl(this.salesDetails.bid_number),
          bid_received_date: new FormControl(new Date(this.salesDetails.bid_received_date).toISOString().substring(0,10)),
          bid_received_from: new FormControl(this.salesDetails.bid_received_from),
          bid_sent_date: new FormControl(new Date(this.salesDetails.bid_sent_date).toISOString().substring(0,10)),
          requirements: new FormControl(this.salesDetails.requirements),
          document_path: new FormControl(this.salesDetails.document_path),
          document_received: new FormControl(this.salesDetails.document_received),
          status: new FormControl(this.salesDetails.status),
          executive: new FormControl(this.salesDetails.executive)
        });
        this.estimationInfoForm = this.fb.group({
          inclusions: new FormControl(''),
          exclusions: new FormControl(''),
          project_name: new FormControl(this.salesDetails.project_name),
          main_steel_est_schedule: new FormControl(),
          main_steel_hours: new FormControl(),
          misc_steel_est_schedule: new FormControl(),
          misc_steel_hours: new FormControl(),
        });
        this.quoteInfoForm = this.fb.group({
          quote_price: new FormControl(),
          engg_price: new FormControl(),
          comments: new FormControl(),
        });
        
        this.fabricatorInfoForm.disable();
        this.bidInfoForm.disable();
        this.estimationInfoForm.disable();
        this.quoteInfoForm.disable();

        if(this.salesDetails.status === 'Open'){
          this.bidInfoForm.enable();
        }

        // if(this.bidInfoForm.value['status'].value === 'Estimate Pending'){
        //   this.estimationInfoForm.enable();
        // }
        
        // console.log("status", this.bidInfoForm);
        // this.estimationInfoForm.disable();
      }
    });

    this.authService.getLatestQuote().subscribe(data=>{
      console.log("latest", data, typeof (data.data));
      console.log("length", data.data.length);
      if (data.data.length>0) {
        this.quoteDetails = data.data[0];
        console.log("quotes",this.quoteDetails);

        this.quoteInfoForm = this.fb.group({
          quote_price: new FormControl(this.quoteDetails.quote_price),
          engg_price: new FormControl(this.quoteDetails.engg_price),
          comments: new FormControl(this.quoteDetails.comments),
        });
        this.quoteInfoForm.disable();
      }
    });

    this.authService.getLatestEstimation().subscribe(data=>{
      console.log("latest", data, typeof (data.data));
      console.log("length", data.data.length);
      if (data.data.length>0) {
        this.estimationDetails = data.data[0];
        console.log("estimationDetails",this.estimationDetails);

        this.estimationInfoForm = this.fb.group({
          inclusions: new FormControl(this.estimationDetails.inclusion),
          exclusions: new FormControl(this.estimationDetails.exclusion),
          main_steel_est_schedule: new FormControl(new Date(this.estimationDetails.main_steel_est_schedule).toISOString().substring(0,10)),
          main_steel_hours: new FormControl(this.estimationDetails.main_steel_hours),
          misc_steel_est_schedule: new FormControl(new Date(this.estimationDetails.misc_steel_est_schedule).toISOString().substring(0,10)),
          misc_steel_hours: new FormControl(this.estimationDetails.misc_steel_hours),
        });
        this.estimationInfoForm.disable();
      }
    });
  };

  ngAfterViewChecked() {

  }

  publishLead(fabricator, bid){
    bid.status = "RFQ";

    let newLead = Object.assign(fabricator, bid);

    this.authService.publishLead(newLead).subscribe((data)=>{
      console.log("subscribe", data);
      if(data.affectedRows>0){
        this.submitSuccess = !this.submitSuccess;
        this.message = "Lead has been published.";
      }
      else{
        this.submitted = !this.submitted;
        this.message = "There has been an error while submitting Lead, Please try again.";
      }
    });;

  }

  addInclusion(inc, event){
    if(event.target.checked ===  true){
      this.inclusions.push(inc.value);
    }
    else{
      let index = this.inclusions.indexOf(inc.value);
      this.inclusions.splice(index, 1);
    }
    console.log("inc", this.inclusions);
  }

  addExclusion(exc, event){
    if(event.target.checked ===  true){
      this.exclusions.push(exc.value);
    }
    else{
      let index = this.exclusions.indexOf(exc.value);
      this.exclusions.splice(index, 1);
    }
    console.log("inc", this.exclusions);
  }

  reQuote(){
    this.prepareQuote();
  }

  prepareQuote(){
    let bid_number = this.salesDetails.bid_number;
    console.log("sendForEst", bid_number);
    this.router.navigate(['quote', bid_number]);
  }

  addEstimation(){
    let bid_number = this.salesDetails.bid_number;
    console.log("add estimation", bid_number);
    this.router.navigate(['estimation', bid_number]);
  }


  sendForEstimation(){
    console.log("yes", this.bid_number);
    let status = "Estimate Pending";
    let response;
    this.authService.updateBidStatus(status, this.bid_number).subscribe(res => {
      response = res.json();
      console.log("res", response);
      if(response.data.changedRows == 1){
        this.submitSuccess = true;
        this.message = "Bid has been sent for estimation.";
      }
      else{
        this.submitted = true;
        this.message = "Try again. You can either try again or go back.";
      }
    });
  }

  tryAgain(){
    this.submitSuccess = false;
    this.submitted = false;
  }

  close(){
    history.back();
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

  logout() {
    sessionStorage.clear();
    this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }


}
