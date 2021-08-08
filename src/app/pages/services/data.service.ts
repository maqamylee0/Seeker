import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getActiveUser() {
    return JSON.parse(localStorage.getItem('activeUser'));
  }
  //  function to set Job
  setMyJob(data){
    return localStorage.setItem('myjob', JSON.stringify(data));

  }
   // function to get vendor shop
  getjobId() {
    return JSON.parse(localStorage.getItem('jobId'));
  }
    //function to get active shop
  getActiveJob() {
    return JSON.parse(localStorage.getItem('activeJob'));
  }

}
