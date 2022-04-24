import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  public info = {}
  photoURL:string = "";
  isAuth:boolean = false;
  constructor() { }
  private subject = new Subject<any>();
  sendClickEvent(isAuth: boolean) {
    this.isAuth = isAuth;
    console.log("Current Auth Status: " + this.isAuth);
    this.subject.next();
  } 
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
  /* sendSellerTripsCallFunctionEvent() {
    this.subject.next();
  } 
  getSellerTripsCallFunctionEvent(): Observable<any>{ 
    return this.subject.asObservable();
  } */
}
