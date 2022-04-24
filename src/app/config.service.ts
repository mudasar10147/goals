import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  getCountdownTime(){
    return this.http.get('/api/countdown', {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  setTimer(val: string){
    let value = {
      dateTime: val
    }
    return this.http.post('/api/countdown', value, {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  checkAuth(){
    return this.http.get('/api/checkAuth', {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  login(user: string, pass: string){
    return this.http.get('/api/logIn/' + user + '/' + pass, {
      responseType: 'json',
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  getGoals(){
    return this.http.get('/api/goals', {
      responseType: 'json',
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  setGoal(goal: string){
    let _goal = {
      goal: goal
    }
    return this.http.post('/api/goals/', _goal, {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  popGoal(id: string){
    let _id = {
      id: id
    }
    return this.http.post('/api/goals/pop', _id, {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  goalAchieved(id: string){
    let _id = {
      id: id
    }
    return this.http.post('/api/goals/achieved', _id, {
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
}
