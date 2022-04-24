import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  value: Date = new Date();
  filterDateFrom: any;
  isSuccess: boolean = false;
  isError: boolean = false;
  newDate: Date = new Date();
  isValue:boolean = false;
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }
  find(target: any){
    this.newDate = new Date(target.value + ' 00:00:00');
    this.isValue = true;
  }
  dateChanged(eventDate: any): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }
  update(){
    this.config.setTimer(this.newDate.getMonth()+1 + " " + this.newDate.getDate() + " " + this.newDate.getFullYear() + " 00:00:00")
      .subscribe(
        (data:any)=>{ console.log("success!"); this.isSuccess = true },
        (err:any)=>{ this.isError = true;}
      )
  }

}
