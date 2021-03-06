
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
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
    //this.jobs = this.data.getActiveJob();
     console.log(this.user)
     //this.jobs=JSON.parse(localStorage.getItem('activeJob'));


  }

  ionViewWillEnter() {
    this.fetchMyJobs();

  }

  fetchMyJobs(){   
    console.log(this.user.uid);
   const where = {key:'userId', value: this.user.uid };    
   this.service._get('jobs', where).subscribe( data => {
    this.jobs = data.docs.map(doc => doc.data());
      console.log(this.jobs);
    });
    
  }
  
   removeJob(jobUid){
  console.log(jobUid);
  this.service._delete('jobs',jobUid);{
    this.fireStore.collection('jobs')
    .doc("jobUid").ref
    .delete()
    .then( data => this.showToast("Job deleted"))
    .catch(error => this.showToast("error"+ error))
  }
}
//   this.fireStore.collection("users")
// .doc(jobUid)
// .delete()
// .then(function () { 
//     console.log("Document successfully deleted!"); 
// }).catch(
//     function(error) { 
//     console.error("Error removing document: ", error); 
// });

  // }

   
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  
  goToJob(jobdata){
    console.log(jobdata);
    // this.router.navigate(['/job/:jobdata'])
    let navigationExtras: NavigationExtras = {
      state: {
        user: jobdata
      }
    };
    this.router.navigate(['/job/about'], navigationExtras);

  }
  goToJobEdit(jobdata){
    console.log(jobdata);
      let navigationExtras: NavigationExtras = {
      state: {
        user: jobdata
      }
    };
    this.router.navigate(['/job/editjob'], navigationExtras);

  }
  goToAddjob(){
    this.router.navigate(['/addjob'])
  }

}

