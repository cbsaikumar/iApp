declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as jsPDF from 'jspdf';

var $ = require('jquery');
var dt = require('datatables.net');
export class Quote {
  constructor(public inclusion: string='',
              public exclusion: string='',
              public main_steel_est_schedule : Date = null,
              public main_steel_hours : number = 0,
              public misc_steel_est_schedule : Date = null,
              public misc_steel_hours : number = 0,
              public status : string = '',
              public bid_type : string = '',
              public quote_price : number = 0,
              public engg_price : number = 0,
              public comments : string = ''
            ) { }
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quoteInfoForm: FormGroup;

  title: string = "Quote";
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
  @ViewChild('quote') quote: ElementRef;


  constructor(
      private fb: FormBuilder,
      private authService:AuthService, 
      private flashMessage: FlashMessagesService, 
      private router: Router,
      private activateRoute : ActivatedRoute
    ) {
  }

  addQuote(quoteForm:Quote){
    console.log("quoteForm",quoteForm);
    let newQuoteForm : Quote;
    newQuoteForm = quoteForm;

    newQuoteForm.inclusion = this.inclusions.toString();
    newQuoteForm.exclusion = this.exclusions.toString();
    newQuoteForm.bid_type = this.selectBidTypes.toString();
    
   
    console.log("newQuoteForm",newQuoteForm);
    
    this.authService.addQuote(newQuoteForm, this.bid_number).subscribe((data)=>{
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

    let bid_number = this.activateRoute.snapshot.params['bid_number'];
    console.log("got bid number as", bid_number);
    this.bid_number = bid_number;

    this.authService.getInclusions().subscribe(data => {
      
      this.misc_inclusions = data.data;      
    });

    this.authService.getExclusions().subscribe(data => {
    
      this.misc_exclusions = data.data;      
    });  
     
    this.authService.getSalesDetails(bid_number).subscribe((data) => {
      if (data) {
        this.salesDetails = data.data[0];
        console.log(this.salesDetails);
      
        this.quoteInfoForm = this.fb.group({
          project_name: new FormControl(this.salesDetails.project_name),
          main_steel_est_schedule: new FormControl(new Date(this.salesDetails.main_steel_est_schedule).toISOString().substring(0,10)),
          main_steel_hours: new FormControl(this.salesDetails.main_steel_hours),
          misc_steel_est_schedule: new FormControl(new Date(this.salesDetails.misc_steel_est_schedule).toISOString().substring(0,10)),
          quote_price: new FormControl(this.salesDetails.quote_price),
          engg_price: new FormControl(this.salesDetails.engg_price),
          comments: new FormControl(this.salesDetails.comments),
          misc_steel_hours: new FormControl(this.salesDetails.misc_steel_hours),
          inclusion: new FormControl(this.salesDetails.inclusion),
          exclusion: new FormControl(this.salesDetails.exclusion)
        });
    
        // this.fabriatorInfoForm.disable();
        this.quoteInfoForm.disable();
        // console.log("status", this.bidInfoForm);
        // this.estimationInfoForm.disable();
      }
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

  // addBidType(bid, event){
  //   if(event.target.checked ===  true){
  //     this.selectBidTypes.push(bid.value);
  //   }
  //   else{
  //     let index = this.selectBidTypes.indexOf(bid.value);
  //     this.selectBidTypes.splice(index, 1);
  //   }
  // }
  cancel(){
    history.back();
  }

  generateQuote(){
    // const doc = new jsPDF();
    // doc.addImage("../../assets/imgs/report_header.png", 0, 0);
    // doc.save("Report.pdf");
    // let specialElementHandlers = {
    //   '#editor' : function(element, renderer){
    //     return true;
    //   }
    // };

    // let quote = this.quote.nativeElement;

    // doc.fromHTML(quote.innerHTML, 15, 15, {
    //   'widh': 190,
    //   'elementHandlers' : specialElementHandlers
    // });

    // doc.save("Report.pdf");

    // html2canvas(quote.innerHTML).then(function(canvas){
    //   const doc = new jsPDF();
    //   doc.save("Report.pdf");
    // });

  
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
