import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export class Fabricator {
  constructor(public fabricator_name: string='',
              public fabricator_contact_name: string='',
              public fabricator_email : string = '',
              public fabricator_phone : string = '',
              public fabricator_website : string = '',
              public fabricator_address : string = ''
            ) { }
}

@Component({
  selector: 'app-fabricator',
  templateUrl: './fabricator.component.html',
  styleUrls: ['./fabricator.component.scss']
})
export class FabricatorComponent implements OnInit {
  
  fabricatorInfoForm: FormGroup;
  title : string = "Fabricator";
  showMenu: boolean;
  submitSuccess: boolean;
  submitted: boolean;

  @ViewChild('mySidenav') mySideNav: ElementRef;
  @ViewChild('main') main: ElementRef;


  constructor(
    private fb: FormBuilder,
    private authService:AuthService, 
    private flashMessage: FlashMessagesService, 
    private router: Router,
    private activateRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.fabricatorInfoForm = this.fb.group({
      fabricator_name: new FormControl('',[Validators.required]),
      fabricator_contact_name: new FormControl('',[Validators.required]),
      fabricator_email: new FormControl('',[Validators.required, Validators.email]),
      fabricator_phone: new FormControl('',[Validators.required]),
      fabricator_website: new FormControl('',[Validators.required]),
      fabricator_address: new FormControl('',[Validators.required]),
    });
  }

  addFabricator(fabricatorInfoForm: Fabricator){
    console.log("Fabricator", fabricatorInfoForm);

    this.authService.addFabricator(fabricatorInfoForm).subscribe((data)=>{
      console.log("subscribe", data);
      if(data.affectedRows>0){
        this.submitSuccess = !this.submitSuccess;
      }
      else{
        this.submitted = !this.submitted;
      }
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

  logout(){
    sessionStorage.clear();
    this.flashMessage.show('You are logged out!', {cssClass:'alert-success text-center', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}
