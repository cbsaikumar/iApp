declare var require: any;

import { AuthService } from '../../services/auth.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
var $ = require('jquery');
var dt = require('datatables.net');


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css', './sales.component.css']
})
export class SalesComponent implements OnInit {

  title: string = "Sales";
  rootNode: any;
  salesData: any[];
  showMenu: boolean;
  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(rootNode: ElementRef, private authService: AuthService, 
    private flashMessage: FlashMessagesService, private router: Router) {
    this.rootNode = rootNode;
  }
  ngOnInit() {
    let _self = this;
    this.authService.getSales().subscribe(data => {
      console.log("sales", data, typeof (data.data));
      this.salesData = data.data;

      this.salesData.forEach((ele) => {
        ele.bid_received_date = new Date(ele.bid_received_date).toDateString();
        ele.bid_due_date = new Date(ele.bid_due_date).toDateString();
        ele.bid_sent_date = new Date(ele.bid_sent_date).toDateString();
      });


      function format(d) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
          '<tr>' +
          '<td>Bid Number:</td>' +
          '<td>' + d.bid_number + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Fabricator:</td>' +
          '<td>' + d.fabricator_name + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Executive:</td>' +
          '<td>' + d.executive + '</td>' +
          '</tr>' +
          '</table>';
      }


      var table = $('#example').DataTable({
        data: this.salesData,
        columns: [
          {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": '',
            "render": function () {
              return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
            },
            width: "15px"
          },
          { "className": 'bid_class',
            data: 'bid_number',
            //<a href="sales/`+data+`">`+data+`</a>`;
          },
          {
            data: 'bid_received_date',
            type: 'date'
          },
          {
            data: 'bid_due_date',
            type: 'date'
          },
          {
            data: 'bid_sent_date',
            type: 'date'
          },
          { data: 'fabricator_name' },
          { data: 'project_name' },
          { data: 'executive' },
          { data: 'status' }
        ]
      });

      $('#example tbody').on('click', 'td:nth-child(2)', function () {
        var table = $('#example').DataTable();
        let bid_number = table.cell(this).data();
        if(bid_number != null){
          _self.router.navigate(['/sales', bid_number]);
        }        
      });
      // $('#example tbody').on('mouseover', 'td:nth-child(2)', function () {
      //   var table = $('#example').DataTable();
      //   console.log(table.cell(this).data());
      //   this.style.color="red";
        
      // });

      $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var tdi = tr.find("i.fa");
        var row = table.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
          tdi.first().removeClass('fa-minus-square');
          tdi.first().addClass('fa-plus-square');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
          tdi.first().removeClass('fa-plus-square');
          tdi.first().addClass('fa-minus-square');
        }
      });
    });
  }

  openSalesDetails(bid_number){
    this.router.navigate(['sales', bid_number]);
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
