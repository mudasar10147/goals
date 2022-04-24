import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from './config.service';
import { SharedServicesService } from './SharedServices/shared-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUserAuth: boolean = false;
  isLoaded: boolean = false;
  constructor(private config: ConfigService, public sharedService: SharedServicesService, private router: Router, private route: ActivatedRoute){
    this.config.checkAuth()
      .subscribe(
        ()=>{ 
          this.isUserAuth = true;
          this.isLoaded = true;
          this.sharedService.sendClickEvent(true);
          console.log("User Authentication: true");
          console.log(this.route.snapshot.paramMap);
          this.router.navigate(['/home']);
        },
        (err)=>{ this.isUserAuth = false; console.log("User Authentication: false"); this.sharedService.sendClickEvent(false);}
      )
  }
}
