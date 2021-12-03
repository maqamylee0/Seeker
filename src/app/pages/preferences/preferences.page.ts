import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
 user:any;
 jobs:any;
 jobId:any;
 prof:any;
  professions=["Technology","Health Sciences","Architecture and Construction","Agriculture","Education","Business and Finance","Entertainement","Marketing","Food and Beverages","Sports","Household help","Other"];

  constructor(
    public service:ApiService,
    public router:Router,
    public toast:ToastController,
    public data:DataService,
    public fireAuth:AngularFireAuth,
    public firestore:AngularFireStorage,
    public fireStore:AngularFirestore
  ) { }

  ngOnInit() {
    
    this.user = this.data.getActiveUser();
  }
  ionViewWillEnter() {
    if(this.user!== null){
      this.fetchLikes();
      console.log(this.jobs);
      // this.router.navigate(['/opportunities'])

    }else{
      this.fetchprof();

    }
    

  }
  fetchLikes(){  
    const where = { key: 'liker', value:this.user.uid };

    console.log(this.user.jobId);
    this.service._get('likes', where).subscribe(data => {
   // this.jobs = data.docs.map(doc => doc.data());
      this.jobs = data.docs.map(doc => doc.data());
    // this.item.forEach(element => {
    //   if(element.userId !== this.user.uid){
     this.jobs.filter(function(ele){ 
      return ele.userId !== this.user.uid; 
  });
});

}
//if(this.jobId !== null){
  fetchprof(){
    if(this.user !== null)
  this.jobId=this.user.jobId;

switch(this.jobId){
  case "1":
   this.prof ="Technology";
  break;
  case "2":
   this.prof ="Health Sciences";
      break;
  case "3":
    this.prof ="Architecture and Construction";
    break;
  case "4":
      this.prof ="Agriculture";
      break;
  case "5":
      this.prof ="Education";
        break;
  case "6":
      this.prof ="Business and Finance";
        break;
      case "7":
      this.prof ="Entertainment";
      break;
      case "8":
      this.prof ="Marketing";
      break;
      case "9":
       this.prof ="Food and Beverages";
      break;
      case "10":
      this.prof ="Sports";
        break;
        case "11":
      this.prof ="Household help";
        break;
        case "12":
      this.prof ="Other";
        break;
      }
    }
  onSubmit(profession){
    console.log(profession);
    switch(profession){
     case"Technology":
        this.setJobId(1)
        break;
        case"Health Sciences":
        this.setJobId(2)
        break;
        case"Architecture and Construction":
        this.setJobId(3)
        break;
        case"Agriculture":
        this.setJobId(4)
        break;
        case"Education":
        this.setJobId(5)
        break;
        case"Business and Finance":
        this.setJobId(6)
        break;
        case"Law":
        this.setJobId(7)
        break;
        case"Marketing":
        this.setJobId(8)
        break;
        case"Food and Beverages":
        this.setJobId(9)
        break;
        case"Sports":
        this.setJobId(10)
        break;
        case"Household Help":
        this.setJobId(11)
        break;
        case"Other":
        this.setJobId(12)
        break;
        case"Builder":
        this.setJobId(13)
        break;
    }
    
  }
  
  setJobId(jobId){
    // const data={'jobId':jobId}; 
    // console.log(this.user.id);
    // console.log(data);  
    // this.service._edit('users', this.user.uid, data, async (result) => {
    // await this.showToast(`Preference added`);
     localStorage.setItem('jobId',jobId);
    // });
  //   this.service._edit('users', this.user.id, data, callback=>{});{      
  //     this.fireStore.collection('users')
  //     .doc(this.user.id)
  //     .update(data)
  //     .then( data => {console.log( data) })
  //     .catch( error => {console.log(error)});
  //   }
   }
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  goToOpportunities(){
    this.router.navigate(['/opportunities'])
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Preferences Set',
      duration: 2000
    });
    toast.present();
  }
  goToLogin(){
    this.router.navigate(['/login'])

  }
  
  unlike(jobUid){
    console.log(jobUid);
    this.service._delete('likes',jobUid);{
      this.fireStore.collection('likes')
      .doc(jobUid)
      .delete()
      .then( data => this.showToast("Job Removed from likes"))
      .catch(error => this.showToast("error"+ error))
    }
    this.router.navigate(['/opportunities'])

  }
  goToJob(job){
    const  jobdata=job;
    let navigationExtras: NavigationExtras = {
      state: {
        user: jobdata
      }
    };
    this.router.navigate(['/job-detail'], navigationExtras);
  }
    
  

}