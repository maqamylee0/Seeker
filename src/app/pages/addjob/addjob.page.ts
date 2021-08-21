import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.page.html',
  styleUrls: ['./addjob.page.scss'],
})
export class AddjobPage implements OnInit {
 openForm: boolean = false;
  job: any;
  btnDisabled=false;
  jobs: any;
  user:any;
  file: File;
  documentFile=""
  documentUrl=""
  btnText = 'Add Job';
  processing = false;
  constructor(
    public firestore:AngularFireStorage,
    public service:ApiService,
    public router:Router,
    public toast:ToastController,
    public data:DataService,
    public fireStore:AngularFirestore
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();
  }
  
  
  
  async addJob(form) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    this.btnDisabled = true;
    const job = form.value;
    const ref = await this.upload(this.documentFile);

    job.userId=this.user.uid;
    job.ref=ref;
    console.log(job);

    this.fireStore.collection('jobs').add(job)
    .then( (ref) => {
      job.timeStamp = + new Date();
      const uid = ref.id;
      job.uid = uid;
      this.btnText = 'Add Job';
      this.btnDisabled = false;
      this.service._edit('jobs', uid, job);      
       this.presentToast()
        localStorage.setItem('activeJob', JSON.stringify(job));
        this.router.navigate(['/jobs'])
   }).catch( error =>    alert(error.message));
   
  }
  selectDocument(event) {
    this.documentFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.documentUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  async upload(file) {
    console.log("here");
   const randomId = Math.random().toString(36).substring(2);
   const ref = this.firestore.ref("documents/" + randomId);
   const task = await ref.put(file);
   const downloadURL = await task.ref.getDownloadURL();
   return downloadURL;
 }
  //   this.service._add('jobs', job, ( result ) => {
  //     this.btnText = 'Add Job';
  //     this.btnDisabled = false;
  //     if (result.flag ) {
  //       this.presentToast()
  //       localStorage.setItem('activeJob', JSON.stringify(result.data));
  //       this.router.navigate(['/jobs'])
  //     } else {
  //     }
  //   });
  // }

  //    this.service._addJob('jobs', job, ( result ) => {
      
  //         this.btnText = 'Adding Job..';
  //         this.processing = false;
  //         if ( result) {           

  //           console.log(job);
  //           localStorage.setItem('activeJob', JSON.stringify(job));

  //             this.addBtnClicked();
  //             this.presentToast()
  //             this.goTojob();
  //            // this.editJob();

  //         } else {
  //           alert(result.error.message);
  //         }
  //    });
  // }
  
  editJob(){
    const myjob=JSON.parse(localStorage.getItem('activeJob'));
    console.log(myjob);    
    this.service._edit('jobs',myjob.uid, myjob);{         
    this.fireStore.collection('jobs')
    .doc(myjob.uid)
    .update(myjob)
    .then( () =>{     
      //  this.presentToast()
      //  this.btntext="Edit";
      

      localStorage.removeItem('activeJob');
      }
    )
    .catch( error =>alert(error.message)
    )
    }
     }
     
  
  addBtnClicked() {
    this.openForm = !this.openForm;
  }
  goTojob(){
    this.router.navigate(['/jobs'])

  }

 
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Job added',
      duration: 2000
    });
    toast.present();
  }
}
