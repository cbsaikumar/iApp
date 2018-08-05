declare var require: any;

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Fabricator } from '../fabricator/fabricator.component';
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

  defaultRequirements: string[] = ["Structural", "Miscellaneous", "Engineering"];
  requirements : string[] = [];
  fabricatorInfoForm: FormGroup;
  newLeadForm: FormGroup;
  submitSuccess: boolean;
  submitted: boolean;

  selectedFabricator: any;
  selectedFabricatorName: any;

  public fabricators : Fabricator[];
  public salesCount: number;
  fabricatorsNames : any;

  showFabricatorInfo : boolean;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(
    private fb: FormBuilder,
    private authService:AuthService, 
    private flashMessage: FlashMessagesService, 
    private router: Router,
    private activateRoute : ActivatedRoute,
    
  ) { }

  publish(newLeadForm:any, canPublish: boolean){
    let bid_number = "ABCD".concat((this.salesCount+1).toString());
    console.log("bid_number",bid_number);
  
    const merged = Object.assign(newLeadForm.bidInfoForm, this.selectedFabricator[0]);
    merged.bid_number = bid_number;
    merged.requirements = this.requirements.toString();
    if(canPublish){
      merged.status = "RFQ";
    }
    else{
      merged.status = "Open";
    }
    console.log("newLeadForm", merged);

    
    this.authService.addLead(merged).subscribe((data)=>{
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
    
    this.authService.getCount("sales").subscribe(data=>{
      if(data){
        this.salesCount = data.data[0]["count"];
      }
    });

    this.authService.getFabricators().subscribe((data)=>{
      if(data){
        this.fabricators = data.data;
        console.log("fabricators", this.fabricators);
      }
    });  
    
    this.newLeadForm = this.fb.group({
        fabricatorInfoForm : this.fb.group({
          fabricator_name: new FormControl(),
          fabricator_contact_name: new FormControl(''),
          fabricator_email: new FormControl(''),
          fabricator_phone: new FormControl(''),
          fabricator_website: new FormControl(''),
          fabricator_address: new FormControl(''),
        }),
        bidInfoForm : this.fb.group({
          project_name: new FormControl(''),
          project_address: new FormControl(''),
          bid_received_date: new FormControl(null),
          bid_due_date: new FormControl(null),
          document_received: new FormControl('', Validators.maxLength(5)),
          document_path: new FormControl(''),
          requirements: new FormControl(),
          bid_received_from : new FormControl(''),
          executive: new FormControl('')
        }),
    });

    //this.newLeadForm.controls['bidInfoForm'].disable();

    this.newLeadForm.controls['fabricatorInfoForm'].disable();
    //@ts-ignore
    this.newLeadForm.controls['fabricatorInfoForm'].controls['fabricator_name'].enable();
  };
  
  onChange(event){
    this.selectedFabricatorName = event.target.value;
    console.log("selected",  this.selectedFabricatorName);
    this.selectedFabricator = this.fabricators.filter((element, index, array)=>{
      return element.fabricator_name === this.selectedFabricatorName;
    });

    console.log("elemtn", this.selectedFabricator);

    this.newLeadForm.setValue({
      fabricatorInfoForm : {
        fabricator_name : this.selectedFabricator[0]['fabricator_name'],
        fabricator_contact_name : this.selectedFabricator[0]['fabricator_contact_name'],
        fabricator_email : this.selectedFabricator[0]['fabricator_email'],
        fabricator_phone : this.selectedFabricator[0]['fabricator_phone'],
        fabricator_website : this.selectedFabricator[0]['fabricator_website'],
        fabricator_address : this.selectedFabricator[0]['fabricator_address'],
      },
      bidInfoForm : {
        project_name: '',
        project_address: '',
        bid_received_date: null,
        bid_due_date: null,
        bid_received_from : '',
        document_received: null,
        document_path: '',
        requirements: '',
        executive: ''
      },
    });
    
    this.showFabricatorInfo = true;
  }

  cancel(){
    history.back();
  }

  tryAgain(){
    this.submitSuccess =false;
    this.submitted = false;
  }

  addRequirement(req, event){
    if(event.target.checked ===  true){
      this.requirements.push(req.value);
    }
    else{
      let index = this.requirements.indexOf(req.value);
      this.requirements.splice(index, 1);
    }

    console.log("reqs", this.requirements);
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
