import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user:any;
openForm: boolean = false;
  
  

  constructor(
    public fireAuth:AngularFireAuth,
    public firestore:AngularFireStorage,
    public service:ApiService,
    public router:Router,
    public data:DataService,
    public toast:ToastController,
    public fireStore:AngularFirestore
  ) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('activeProfile'));

    // this.user = this.data.getActiveUser();
    console.log(this.user);
   

    
  }
  gotoAddProfile(){
    this.router.navigate(['addprofile']);
  }
  signOut() {
    this.fireAuth.signOut()
      .then(res => {
        this.router.navigateByUrl('login');
        this.data.removeUser();
        this.data.removeJob();
        this.data.removeall();
      })
      .catch(error => {
        console.log(error);
      })
  }

 
}

