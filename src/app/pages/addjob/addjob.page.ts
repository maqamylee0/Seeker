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
  ref:any;
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
  
  
  async addJob( form ) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    this.btnDisabled = true;
    const job = form.value;
    job.userId=this.user.uid;
    // console.log(job);
    const jobId= parseInt(job.jobId);
    const url = await this.upload(this.documentFile);
     this.service._addjob('jobs', job, ( result ) => {
      console.log(result.id);
//       this.fireStore.collection('jobs').add(job)
// .then(     (result)=>{      console.log(result.id);}

// //     console.log("Document written with ID: ", docRedocReff.id);
// )
// .catch(error => console.error("Error adding document: ", error))
// }
          this.btnText = 'Adding Job..';
          this.processing = false;
          if ( result) {
            job.uid=result.id;
            job.ref=this.ref;    

            console.log(job.uid);
            localStorage.setItem('activeJob', JSON.stringify(job));

              this.addBtnClicked();
              this.presentToast()
              this.goTojob();
              this.editJob();

          } else {
            alert(result.error.message);
          }
      });
    
  }
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

  async upload(file) {
     console.log("here");
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.firestore.ref("documents/" + randomId);
    const task = await this.ref.put(file);
    const downloadURL = await task.ref.getDownloadURL();
    return downloadURL;
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Job added',
      duration: 2000
    });
    toast.present();
  }
}
