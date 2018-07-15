import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private flashMessage: FlashMessagesService) { }
    canActivate() {
        if (this.authService.getUserInfo()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.flashMessage.show("You are not authorized to view this page! Hence redirecting to login!", {cssClass:'alert-danger text-center', timeout: 3000});
        setTimeout(()=>{
            this.router.navigate(['/login']);
        }, 3000);
        return false;
    }
}