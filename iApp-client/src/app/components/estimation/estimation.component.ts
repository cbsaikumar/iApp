declare var require: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './estimation.component.css']
})
export class EstimationComponent implements OnInit {

  title: string = "Estimation";
  showMenu: boolean;
  estimationData: any;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.authService.getSales().subscribe(data => {
      console.log("estimation", data, typeof (data.data));
      this.estimationData = data.data;

      this.estimationData.forEach((ele) => {
        ele.bid_received_date = new Date(ele.bid_received_date).toDateString();
        ele.bid_due_date = new Date(ele.bid_due_date).toDateString();
        ele.bid_sent_date = new Date(ele.bid_sent_date).toDateString();
      });

      console.log("@@@", this.estimationData);

      $('#example').DataTable({
        data: this.estimationData,
        columns: [
          { data: 'bid_number' },
          {
            data: 'fabricator',
          },
          {
            data: 'bid_sent_date',
            type: 'date'
          },
          {
            data: 'bid_due_date',
            type: 'date'
          },
          { data: 'executive' },
          { data: 'status' }
        ]
      });
    });

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
