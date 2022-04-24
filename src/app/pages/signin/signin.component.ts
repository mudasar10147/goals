import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { SharedServicesService } from 'src/app/SharedServices/shared-services.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: string = '';
  pass: string = '';
  constructor(private config: ConfigService, private router: Router, private sharedService: SharedServicesService) { }

  ngOnInit(): void {

  }
  signIn(){
    this.config.login(this.user, this.pass)
      .subscribe(data => {
        this.sharedService.sendClickEvent(true);
        this.router.navigate(['/home']);
      }, (err) => {})
  }
  

}
