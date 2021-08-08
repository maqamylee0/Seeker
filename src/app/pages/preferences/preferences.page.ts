import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
 user:any
  professions=["Software Developer","Painter","Nurse","Teacher","Dancers","Househelp","Carpenter","Cheff","Builder","Pilot","Cloud Architect","Cyber Security","Mechanic"]

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
console.log(this.user);
  }
  onSubmit(profession){
    console.log(profession);
    switch(profession){
     case"Software Developer":
        this.setJobId(1)
        break;
        case"Nurse":
        this.setJobId(2)
        break;
        case"Painter":
        this.setJobId(3)
        break;
        case"Househelp":
        this.setJobId(5)
        break;
        case"Teacher":
        this.setJobId(6)
        break;
        case"Dancers":
        this.setJobId(7)
        break;
        case"Carpenter":
        this.setJobId(8)
        break;
        case"CyberSecurity":
        this.setJobId(9)
        break;
        case"Cheff":
        this.setJobId(10)
        break;
        case"Cloud Architect":
        this.setJobId(11)
        break;
        case"Mechanic":
        this.setJobId(12)
        break;
        case"Pilot":
        this.setJobId(13)
        break;
        case"Builder":
        this.setJobId(14)
        break;
    }
    
  }
  setJobId(jobId){
    const data={'jobId':jobId}; 
    console.log(this.user.id);
    console.log(data);  
    // this.service._edit('users', this.user.uid, data, async (result) => {
    // await this.showToast(`Preference added`);
     localStorage.setItem('jobId', jobId);
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
    this.router.navigate(['/signup'])
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Preferences Set',
      duration: 2000
    });
    toast.present();
  }
}
