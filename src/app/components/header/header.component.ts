import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clickedButton:string = 'home';
  private subscription: Subscription = new Subscription();
  
  public dateNow = new Date();
  public dDay = new Date('5 24 2022 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  isSet:boolean = false;

  public timeDifference:any;
  public secondsToDday:any;
  public minutesToDday:any;
  public hoursToDday:any;
  public daysToDday:any;

  public secZero:string = "";
  public hourZero:string = "";
  public minZero:string = "";
  public dayZero:string = "";
  constructor(private config:ConfigService){
  }

  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      if(this.timeDifference < 0){
        this.isSet = false;
      } else {
        this.allocateTimeUnits(this.timeDifference);
      }
  }

private allocateTimeUnits (timeDifference:any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      this.secondsToDday < 10 ? this.secZero = "0" : this.secZero = "";
      this.minutesToDday < 10 ? this.minZero = "0" : this.minZero = "";
      this.hoursToDday < 10 ? this.hourZero = "0" : this.hourZero = "";
      this.daysToDday < 10 ? this.dayZero = "0" : this.dayZero = "";
}

  ngOnInit() {
    this.config.getCountdownTime()
      .subscribe(
        (data:any)=>{
          console.log(data);
          this.isSet = true;
          this.dDay = new Date(data.countdown);
          this.subscription = interval(1000)
            .subscribe(x => { this.getTimeDifference(); });
        },
        (err)=>{
          this.isSet = false;
        }
      )
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

  clicked(val: string){
    this.clickedButton = val;
  }

}
