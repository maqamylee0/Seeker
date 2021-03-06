import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { File } from '@ionic-native/file/ngx';
import{FileTransfer} from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

import { CallNumber } from '@ionic-native/call-number/ngx';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  user:any;
  job:any;
  search:string;
  emaill:any;
  jobdetail:any;
  openForm: boolean = false;
  btnDisabled=false;
  jobs: any;
  
  processing = false;
  jobdet:any;

    constructor(
      public fireAuth:AngularFireAuth,
      public firestore:AngularFireStorage,
      public service:ApiService,
      public router:Router,
      public data:DataService,
      public toast:ToastController,
      public fireStore:AngularFirestore,
      public emailComposer: EmailComposer,
      public callNumber: CallNumber,
      public file:File,
      public document: DocumentViewer,
      public transfer: FileTransfer
      // private iab: InAppBrowser



    ) { }
  
    ngOnInit() {
      this.user = this.data.getActiveUser();
      // this.item=this.route.snapshot.params;
    if (this.router.getCurrentNavigation().extras.state) {
      this. jobdet = this.router.getCurrentNavigation().extras.state.user;
     console.log(this.jobdet);
      
    }
    


 

    }
    // ionViewWillEnter() {
    //  // this.fetchMyJob();
      
    // }
  
    // fetchMyJob(){  
    //   const where = {key: 'jobId', value: this.user.jobId }; 
    //   console.log(this.user.jobId)   
    //   this.service._get('jobs', where).subscribe(data => {
    //     this.jobdetail = data.docs.map(doc => doc.data());
    //   });
    // }
  
    // selectDocument(event) {
    //   this.documentFile = event.target.files[0];
    //   if (event.target.files && event.target.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = (event: any) => {
    //       this.documentUrl = event.target.result;
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //   }
    // }
    
    // async addOffer( form ) {
    //   this.btnText1 = 'Please wait ... ';
    //   this.processing = true;
    //   this.btnDisabled = true;
    //   const job = form.value;
    //   job.userId=this.user.uid;
    //   console.log(job);
    //   const jobId= parseInt(job.jobId);
    //   const url = await this.upload(this.documentFile);
    //   this.service._addJob('jobs', job, ( result ) => {
    //         this.btnText1 = 'Adding Job..';
            
    //         this.processing = false;
    //         if ( result.flag) {
    //             this.addBtnClicked();
    //             this.presentToast()
    //         } else {
    //           alert(result.error.message);
    //         }
    //     });
      
    // }
    addBtnClicked() {
      this.openForm = !this.openForm;
    }
  
    // async upload(file) {
    //    console.log("here");
    //   const randomId = Math.random().toString(36).substring(2);
    //   const ref = this.firestore.ref("documents/CV" + randomId);
    //   const task = await ref.put(file);
    //   const downloadURL = await task.ref.getDownloadURL();
    //   return downloadURL;
    // }
    sendEmail(email){
      console.log(email);
      this.emailComposer.open({
        to:email
      })

    }
    
    getJobpdf(ref){
      console.log(ref);
      
    }
    async callUser(phone) {
      console.log(phone);
    // window.open(`tel:${phone}`, '_system')
      try {
        await this.callNumber.callNumber(phone, true);
      } catch (e) {
        console.error(e);
      }
    }
    async presentToast() {
      const toast = await this.toast.create({
        message: 'Job added',
        duration: 2000
      });
      toast.present();
    }
    openPdf(ref){
      
        this.document.viewDocument(ref,'application/pdf',{});
    
    }

    downloadPdf(){
      let path=this.file.dataDirectory;
      const transfer=this.transfer.create();
      transfer.download(this.jobdet.ref,path+'myfile.pdf').then(entry=>{
        let url=entry.toURL();
        this.document.viewDocument(url,'application/pdf',{});

    });
    }  
}
