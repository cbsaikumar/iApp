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
export class Quote {
  constructor(
              public quote_price : number = 0,
              public engg_price : number = 0,
              public comments : string = '',
              public status : string = '',
              public sales_id : string = '',
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

  save(quoteForm : Quote, status : string){
    console.log("quoteForm",quoteForm);
    let sales_id = sessionStorage.getItem('sales_id');
    console.log('sales_id',sales_id);
    let newQuoteForm : Quote;
    newQuoteForm = quoteForm;
    if(status){
      newQuoteForm.status = "Quote Sent";
    }
    else{
      newQuoteForm.status = "Quote Pending";
    }
    newQuoteForm.sales_id = sales_id;
    console.log("newQuoteForm",newQuoteForm);
    
    this.authService.addQuote(newQuoteForm).subscribe((data)=>{
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
    
    this.quoteInfoForm = this.fb.group({
      quote_price: new FormControl(),
      engg_price: new FormControl(),
      comments: new FormControl(''),
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
  }

  cancel(){
    history.back();
  }

  generateQuote(){
    const doc = new jsPDF('p', 'pt', 'letter');
    
    doc.addImage("../../assets/imgs/report_header.png", 70, 10);
    // var options = {
    //   //'width': 800,
    //   };
    // doc.addHTML($("#print-section"),-1, 220, options, function(){
    //   doc.save("Report.pdf");
    // });
    doc.setLineWidth(0.05);
    doc.line(20, 30, 200, 30);
    doc.setFont("times");
    doc.setFontType("bold");
    doc.text(72, 40, 'PROPOSAL FOR DETAILING');
    doc.text(50, 45, 'THE GERING HIGH SCHOOL ADDITION JOB');
    doc.save("Report.pdf");

    // let printContents, popupWin;
    // printContents = document.getElementById('print-section').innerHTML;
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    // popupWin.document.open();
    // popupWin.document.write(`
    //   <html>
    //     <head>
    //       <title>Print tab</title>
    //       <style>
          
    //       </style>
    //     </head>
    // <body onload="window.print();window.close()">${printContents}</body>
    //   </html>`
    // );
    // popupWin.document.close();
    
  
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
