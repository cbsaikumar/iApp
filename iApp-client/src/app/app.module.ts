import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {AgGridModule } from 'ag-grid-angular'
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { PdfmakeModule } from 'ng-pdf-make';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SalesComponent } from './components/sales/sales.component';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { FooterComponent } from './components/footer/footer.component';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { EstimationComponent } from './components/estimation/estimation.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewLeadComponent } from './components/new-lead/new-lead.component';
import { RolesComponent } from './components/roles/roles.component';
import { SalesDetailsComponent } from './components/sales-details/sales-details.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SalesComponent,
    FooterComponent,
    EstimationComponent,
    UsersComponent,
    SideNavComponent,
    NewLeadComponent,
    RolesComponent,
    SalesDetailsComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [FlashMessagesService, PdfmakeService, AuthGuard, AdminGuard, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
