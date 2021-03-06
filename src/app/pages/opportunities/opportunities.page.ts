import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
})
export class OpportunitiesPage implements OnInit {
user:any;

 jobs:any;

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
    const where = { key: 'jobId', value:this.user.jobId };

    console.log(this.user.jobId);
    this.service._get('jobs', where).subscribe(data => {
   // this.jobs = data.docs.map(doc => doc.data());
      this.jobs = data.docs.map(doc => doc.data());
    // this.item.forEach(element => {
    //   if(element.userId !== this.user.uid){
     this.jobs.filter(function(ele){ 
      return ele.userId !== this.user.uid; 
  });
  
   
    
  
 });

}
  
  
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
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
goToPreferences(){
  this.router.navigate(['/preferences']);
}
goToAll(){
  this.router.navigate(['/alljobs']);
}
share(job){
  console.log(job);
  Share.share({
    title: job.title,
    text:`Check out this job opportunity from ${job.company}`,
    url: job.ref,
    dialogTitle: 'Share with buddies',
  });
}
like(job){
        this.showToast('Added to likes');

  this.fireStore.collection('likes').add(job)
  .then( (ref) => {
    job.timeStamp = + new Date();
    const uid = ref.id;
    job.uid = uid;
    job.liker = this.user.uid; 
    job.status=true;   
    this.service._edit('likes', uid, job);        
      // localStorage.setItem('activeJob', JSON.stringify(job));
      this.router.navigate(['/preferences'])
 }).catch( error =>    alert(error.message));
 
}

  
goToAddjob(){
  this.router.navigate(['/addjob']);
}
}
