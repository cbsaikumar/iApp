import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private flashMessage:FlashMessagesService) { }
    canActivate() {
        if (this.authService.getUserInfo() === 'admin') {
            // admin so return true
            return true;
        }
        // not admin so redirect to login page with the return url

        this.flashMessage.show("You are not authorized to view this page! Hence redirecting to login!", {cssClass:'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
        return false;
    }
}