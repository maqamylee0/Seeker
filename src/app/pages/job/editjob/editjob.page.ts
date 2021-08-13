import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { ApiService} from '../../services/api-service.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.page.html',
  styleUrls: ['./editjob.page.scss'],
})
export class EditJobPage implements OnInit {
btnText="Edit"
processing=false;
btnDisabled=true;
jobdet:any;
user:any;
my_job:any;

  constructor(
    private router:Router,
    public data:DataService,
    public toast:ToastController,
    public service:ApiService,
    public fireStore:AngularFirestore




  ) { }

  ngOnInit() {

    if (this.router.getCurrentNavigation().extras.state) {
      this.jobdet = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.jobdet.uid);
      
    }
    this.user = this.data.getActiveUser();
  }
editJob(form){
  this.btnText = 'Please wait ... ';
    this.processing = true;
    this.btnDisabled = true;
    const my_profile = form.value;    
    this.my_job.uid=this.jobdet.uid; 
    // my_profile.name=this.user.name; 
    this.my_job.phone=this.user.phone; 
    this.my_job.userId=this.user.userId; 

    // my_profile.email=this.user.email; 
    // editProfile(){
       this.btnText="Editing..."
      console.log(this.jobdet.uid)
  this.service._edit('jobs',this.jobdet.uid, this.my_job);{         
    this.fireStore.collection('jobs')
    .doc(this.jobdet.uid)
    .update(this.my_job)
    .then( () =>{     
       this.presentToast()
        this.btnText="Edit";
      this.router.navigate(['job/about']);

      }
    )
    .catch( error =>alert(error.message)
    )
    }
  }

async presentToast() {
  const toast = await this.toast.create({
    message: 'Job Edited',
    duration: 2000
  });
  toast.present();
}

}
