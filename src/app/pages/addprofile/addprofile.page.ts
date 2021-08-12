import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.page.html',
  styleUrls: ['./addprofile.page.scss'],
})
export class AddprofilePage implements OnInit {
user:any;
openForm: boolean = false;
  job: any;
  btnDisabled=false;
  jobs: any;
  documentUrl=""
  btnText = 'Add Profile';
  processing = false;

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
    // this.my_profile = JSON.parse(localStorage.getItem('activeUser'));

    this.user = this.data.getActiveUser();
    console.log(this.user);
    
    
    
  }
  
  async addProfile( form ) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    this.btnDisabled = true;
    const my_profile = form.value;    
    my_profile.uid=this.user.uid; 
    // my_profile.name=this.user.name; 
    my_profile.phone=this.user.phone; 
    // my_profile.email=this.user.email; 
    // editProfile(){
      // this.btntext="Editing..."
      console.log(this.user.uid)
      // const profile=JSON.parse(localStorage.getItem('activeProfile'));
  console.log(my_profile);
      this.service._edit('users',this.user.uid, my_profile);{         
      this.fireStore.collection('users')
      .doc(this.user.uid)
      .update(my_profile)
      .then( () =>{     
         this.presentToast()
        //  this.btntext="Edit";
        this.router.navigate(['profile']);

        localStorage.setItem('activeUser', JSON.stringify(my_profile));
        }
      )
      .catch( error =>alert(error.message)
      )
      }
    }
    // const jobId= parseInt(my_profile.jobId);
    // const url = await this.upload(this.documentFile);
    // this.service._addProfile('Profile', my_profile, ( result ) => {
    //       this.btnText = 'Adding Profile..';
          
    //       this.processing = false;
    //       if ( result.flag) {
    //           this.addBtnClicked();
    //           localStorage.setItem('activeProfile', JSON.stringify(my_profile));

    //           this.presentToast()
    //           this.btnText = 'Add Profile..';

    //       } else {
    //         alert(result.error.message);
    //       }
    //   });
  
  
  
  
  addBtnClicked() {
    this.openForm = !this.openForm;
  }

  // async upload(file) {
  //    console.log("here");
  //   const randomId = Math.random().toString(36).substring(2);
  //   const ref = this.firestore.ref("documents/" + randomId);
  //   const task = await ref.put(file);
  //   const downloadURL = await task.ref.getDownloadURL();
  //   return downloadURL;
  // }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Profile  added',
      duration: 2000
    });
    toast.present();
  }
}

