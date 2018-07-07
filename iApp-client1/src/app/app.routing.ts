import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { SalesComponent } from './components/sales/sales.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'sales-report', component: SalesReportComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }


