import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';


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
  file: File;
  documentFile=""
  documentUrl=""
  btnText = 'Add Job';
  processing = false;
  img: any;
  constructor(
    public firestore:AngularFireStorage,
    public service:ApiService,
    public router:Router,
    public toast:ToastController,
    public data:DataService,
  ) { }

  ngOnInit() {
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
    console.log(job);
    const jobId= parseInt(job.jobId);
    const url = await this.upload(this.documentFile);
    this.service._addJob('jobs', job, ( result ) => {
          this.btnText = 'Adding Job..';
          
          this.processing = false;
          if ( result.flag) {
              this.addBtnClicked();
              this.presentToast()
          } else {
            alert(result.error.message);
          }
      });
    
  }
  addBtnClicked() {
    this.openForm = !this.openForm;
  }

  async upload(file) {
     console.log("here");
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.firestore.ref("documents/" + randomId);
    const task = await ref.put(file);
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
