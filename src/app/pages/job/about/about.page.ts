import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService} from '../../services/api-service.service';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

jobdet:any;
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
    if (this.router.getCurrentNavigation().extras.state) {
      this.jobdet = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.jobdet);
      
    }
    
  // fetchMyJob(){  
  //   const where = {key: 'jobId', value: this.user.jobId }; 
  //   console.log(this.user.jobId)   
  //   this.service._get('jobs', where).subscribe(data => {
  //     this.job = data.docs.map(doc => doc.data());
  //   });
  // }
  }
  goToEdit(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.jobdet
      }
    };
    this.router.navigate(['/job/editjob'], navigationExtras);

  }
  deleteJob(jobUid){
    console.log(jobUid);
    this.service._delete('jobs',jobUid);{
      this.fireStore.collection('jobs')
      .doc("jobUid").ref
      .delete()
      .then( data => this.showToast("Job deleted"))
      .catch(error => this.showToast("error"+ error))
    }}
    async showToast(message) {
      const toast = await this.toast.create({
        message,
        duration: 2000
      });
      toast.present();
    }
  }

