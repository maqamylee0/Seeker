import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ApiService} from '../../services/api-service.service';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
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
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();

  }

  fetchMyJob(){  
    const where = {key: 'jobId', value: this.user.jobId }; 
    console.log(this.user.jobId)   
    this.service._get('jobs', where).subscribe(data => {
      this.job = data.docs.map(doc => doc.data());
    });
  }

}
