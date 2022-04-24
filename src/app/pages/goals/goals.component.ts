import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: any = []
  newGoal: string = '';
  isLoaded: boolean = false;
  constructor(private config: ConfigService) {
    this.config.getGoals()
      .subscribe((goals:any) => {
        this.goals = goals;
        this.isLoaded = true;
      })
  }
  ngOnInit(): void {
  }

  delete(id: string){
    this.config.popGoal(id)
      .subscribe(()=>{console.log('success')}, (err)=>{console.log(err)})
  }
  achieved(id: string){
    this.config.goalAchieved(id)
      .subscribe(()=>{console.log('success')}, (err)=>{console.log(err)})
  }
  setGoal(){
    this.config.setGoal(this.newGoal)
      .subscribe(()=>{console.log('success')}, (err)=>{console.log(err)});
  }
}
