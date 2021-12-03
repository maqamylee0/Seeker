import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.page.html',
  styleUrls: ['./alljobs.page.scss'],
})
export class AlljobsPage implements OnInit {
  search: string;
  user:any;
  jobs:any;
  item;
  constructor(
    public fireAuth:AngularFireAuth,
    public firestore:AngularFireStorage,
    public service:ApiService,
    public router:Router,
    public data:DataService,
    public toast:ToastController,
    public fireStore:AngularFirestore,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();

  }
  ionViewWillEnter() {
    this.fetchMyJobs();

  }

  fetchMyJobs(){   
   this.service._get('jobs').subscribe( data => {
    this.jobs = data.docs.map(doc => doc.data());
      console.log(this.jobs);
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
  goToAddjob(){
    this.router.navigate(['/addjob']);
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
          this.showToast('Added to likes')
  
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
}
