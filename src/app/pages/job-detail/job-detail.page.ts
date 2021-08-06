import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  user:any;
  job:any;
    constructor(
      public fireAuth:AngularFireAuth,
      public firestore:AngularFireStorage,
      public service:ApiService,
      public router:Router,
      public data:DataService,
      public toast:ToastController,
      public fireStore:AngularFirestore,
      private callNumber: CallNumber

    ) { }
  
    ngOnInit() {
      this.user = this.data.getActiveUser();
    }
  
    ionViewWillEnter() {
      this.fetchMyJob();
    }
  
    fetchMyJob(){  
      console.log(this.user.jobId);
      const where = {key: 'jobId', value: this.user.jobId };
      console.log(this.user.jobId);
    //  this.service._get('jobs', where = null) {
    //     if ( where !== null ) {
    //       return this.fireStore.collection('jobs', ref => ref.where(jobId, '==', where.).orderBy('timeStamp', 'desc')).get();
    //     } else {
    //       return this.fireStore.collection('jobs', ref => ref.orderBy('timeStamp', 'desc')).get();
    //     }
    //   }
      this.service._get('jobs', where).subscribe(data => {
        this.job = data.docs.map(doc => doc.data());
        console.log(this.job)
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
    async callUser(phone) {
      try {
        await this.callNumber.callNumber(phone, true);
      } catch (e) {
        console.error(e);
      }
    }
  
    goToJob(){
      this.router.navigate(['/'])
    }
  
}
