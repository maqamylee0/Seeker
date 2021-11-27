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
user1:any;
openForm: boolean = false;
  btntext="Edit";
  error:any;

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
     this.user = this.data.getActiveUser();
      // this.user1 = JSON.parse(localStorage.getItem('activeUser'));
     if (this.router.getCurrentNavigation().extras.state) {
      this. user = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.user);
    

    }}

  
  
  ionViewWillEnter() {
    this.fetchProfile();
  }


  fetchProfile(){  
      console.log(this.user1.uid);

    this.service._getOne('users', this.user1.uid).subscribe( result => {
    if ( result.exists ) {
      this.user = result.data(); 
      console.log(this.user);
    
    } else {      
      this.error = 'User not found here';
    }
});

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
  editProfile(){
    this.router.navigate(['addprofile']);
//     this.btntext="Editing..."
//     console.log(this.user.uid)
//     const profile=JSON.parse(localStorage.getItem('activeProfile'));
// console.log(profile);
//     this.service._edit('users',this.user.uid, profile);{         
//     this.fireStore.collection('users')
//     .doc(this.user.uid)
//     .update(profile)
//     .then( () =>{     
//        this.presentToast()
//        this.btntext="Edit";
//       }
//     )
//     .catch( error =>alert(error.message)
//     )
//     }
  }
 async presentToast() {
    const toast = await this.toast.create({
      message: 'Profile edited',
      duration: 2000
    });
    toast.present();
  }
 
}

