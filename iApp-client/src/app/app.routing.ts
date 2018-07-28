import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { HomeComponent } from './components/home/home.component';
import { EstimationComponent } from './components/estimation/estimation.component';
import { SalesComponent } from './components/sales/sales.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { NewLeadComponent } from './components/new-lead/new-lead.component';
import { SalesDetailsComponent } from './components/sales-details/sales-details.component';
import { QuoteComponent } from './components/quote/quote.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'sales/:bid_number', component: SalesDetailsComponent, canActivate: [AuthGuard] },
  { path: 'new-lead', component: NewLeadComponent, canActivate: [AuthGuard] },
  { path: 'estimation', component: EstimationComponent, canActivate: [AuthGuard] },
  { path: 'quote/:bid_number', component: QuoteComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate:[AuthGuard, AdminGuard] },
  { path: 'roles', component: RolesComponent, canActivate:[AuthGuard, AdminGuard] },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }


