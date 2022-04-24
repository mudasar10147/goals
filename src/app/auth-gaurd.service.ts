import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from './config.service';
import { SharedServicesService } from './SharedServices/shared-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  signInSub: Subscription = new Subscription();
  isUserAuth: boolean = false;
  constructor(private router: Router, private sharedService: SharedServicesService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Gaurd is Activated and Current user Status = " + this.sharedService.isAuth)
    if (this.sharedService.isAuth) {
        return true;
    } else {
      this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
