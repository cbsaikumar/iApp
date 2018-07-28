declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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

  title: string = "Quote";
  showMenu: boolean;

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


  constructor(
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

  addBidType(bid, event){
    if(event.target.checked ===  true){
      this.selectBidTypes.push(bid.value);
    }
    else{
      let index = this.selectBidTypes.indexOf(bid.value);
      this.selectBidTypes.splice(index, 1);
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
