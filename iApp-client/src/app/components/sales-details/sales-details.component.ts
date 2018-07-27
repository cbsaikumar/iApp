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
  salesDetails: any;
  showMenu: boolean;
  salesDetailsForm: FormGroup;
  fabriatorInfoForm: FormGroup;
  bidInfoForm: FormGroup;
  estimationInfoForm: FormGroup;
  dataLoaded: boolean = false;

  misc_inclusions: any[];
  misc_exclusions: any[];
  inclusions: any[] = [];
  exclusions: any[] = [];
  submitSuccess: boolean;
  submitted: boolean;

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
    let bid_number = this.activeRoute.snapshot.params['bid_number'];
    console.log(this.activeRoute.snapshot.params['bid_number']);
    this.authService.getSalesDetails(bid_number).subscribe((data) => {
      if (data) {
        this.salesDetails = data.data[0];
        console.log(this.salesDetails);
        this.dataLoaded = true;
    
        this.fabriatorInfoForm = this.fb.group({
          fabricator: new FormControl(this.salesDetails.fabricator),
          fabricator_Url: new FormControl(this.salesDetails.fabricator_Url),
          fabricator_address: new FormControl(this.salesDetails.fabricator_address),
          fabricator_phone: new FormControl(this.salesDetails.fabricator_phone)
        });
        this.bidInfoForm = this.fb.group({
          bid_number: new FormControl(this.salesDetails.bid_number),
          bid_received_date: new FormControl(new Date(this.salesDetails.bid_received_date)),
          bid_received_from: new FormControl(this.salesDetails.bid_received_from),
          bid_sent_date: new FormControl(this.salesDetails.bid_sent_date),
          bid_type: new FormControl(this.salesDetails.bid_type),
          document_path: new FormControl(this.salesDetails.document_path),
          document_received: new FormControl(this.salesDetails.document_received),
          exclusion: new FormControl(this.salesDetails.exclusion),
          executive: new FormControl(this.salesDetails.executive),
          status: new FormControl(this.salesDetails.status)
        });
        this.estimationInfoForm = this.fb.group({
          inclusion: new FormControl(this.salesDetails.inclusion),
          project_name: new FormControl(this.salesDetails.project_name),
          main_steel_est_schedule: new FormControl(this.salesDetails.main_steel_est_schedule),
          main_steel_hours: new FormControl(this.salesDetails.main_steel_hours),
          misc_steel_est_schedule: new FormControl(this.salesDetails.misc_steel_est_schedule),
          misc_steel_hours: new FormControl(this.salesDetails.misc_steel_hours),
        });
      
        this.fabriatorInfoForm.disable();
        this.bidInfoForm.disable();
        this.estimationInfoForm.disable();
      }
    });
  };

  ngAfterViewChecked() {

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
