import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { EstimationComponent } from './components/estimation/estimation.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { SalesComponent } from './components/sales/sales.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'estimation', component: EstimationComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate:[AuthGuard, AdminGuard] },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }


