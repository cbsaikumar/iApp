import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AgGridModule } from 'ag-grid-angular'
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { FooterComponent } from './components/footer/footer.component';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { EstimationComponent } from './components/estimation/estimation.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SalesComponent,
    SalesReportComponent,
    FooterComponent,
    EstimationComponent,
    UsersComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [FlashMessagesService, AuthGuard, AdminGuard, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
