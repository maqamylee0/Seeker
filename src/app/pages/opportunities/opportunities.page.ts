import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
})
export class OpportunitiesPage implements OnInit {
user:any;
jobs:any;
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
    console.log(this.user.jobId);
    const where = {key: 'jobId', value: this.user.jobId };
    console.log(this.user.jobId);
  
    this.service._get('jobs', where).subscribe(data => {
      this.jobs = data.docs.map(doc => doc.data());
      console.log(this.jobs)
    });
  }

   
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  // actOnOrder(status, order) {
  //   // console.log(status, appointment);
  //   this.service._edit('jobs', o, status, async (result) => {
  //     await this.showToast(`Confirmation done`);
  //     this.fetchMyJobs();
  //   });
  // }

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
