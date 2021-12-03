import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService} from '../../services/api-service.service';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
user:any;
interests:Array<{}>;
 jobs:any;
interest:any;
// jobs:
// {email: string;
// userId:String;
//   company: String;
//   description: String;
//   jobTitle: String;
//   Description: String;}[]=[];
  job_id:any;
 //item:any;

  constructor(
    public fireAuth:AngularFireAuth,
    public firestore:AngularFireStorage,
    public service:ApiService,
    public router:Router,
    public data:DataService,
    public toast:ToastController,
    public fireStore:AngularFirestore,
    private route:ActivatedRoute,
    //private socialSharing: SocialSharing,

  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();
  }

  ionViewWillEnter() {
    this.fetchJobs();
  }

  fetchJobs(){  
    const where = { key: 'userId', value:this.user.uid };

    console.log(this.user.uid);
    this.service._get('likes', where).subscribe(data => {
   // this.jobs = data.docs.map(doc => doc.data());
      this.jobs = data.docs.map(doc => doc.data());
     this.jobs.forEach(element => {
       this.fetchLiker( element.liker)
    //    if(element.userId !== this.user.uid){
    //  this.jobs.filter(function(ele){ 
    //   return ele.userId !== this.user.uid; 
  });
  
   
 
   });
}
  fetchLiker(liker){  
    const where = { key: 'uid', value:liker };

    console.log(this.user.jobId);
    this.service._get('users', where).subscribe(data => {
   // this.jobs = data.docs.map(doc => doc.data());
      let interest = data.docs.map(doc => doc.data());

      let likers ={
        name: interest[0]['name'],
        phone:interest[0]['phone'],
        email:interest[0]['email'],
            };
      this.interests=[];
      this.interests.unshift(likers);
      console.log(this.interests)
     return interest;
         
   
  });
}
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }

 

  
goToPreferences(){
  this.router.navigate(['/preferences']);
}
goToAll(){
  this.router.navigate(['/alljobs']);
}



  
goToAddjob(){
  this.router.navigate(['/addjob']);
}
}
