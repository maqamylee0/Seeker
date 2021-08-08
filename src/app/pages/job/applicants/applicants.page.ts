import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { ApiService} from '../../services/api-service.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.page.html',
  styleUrls: ['./applicants.page.scss'],
})
export class ApplicantsPage implements OnInit {
applicants:any;
user:any;
  constructor(
    public data:DataService,
    public service:ApiService,
    public actionSheetController: ActionSheetController,
    public toast:ToastController,
    public router:Router
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();
  }
fetchApplicants(){
  const where = {key: 'jobId', value: this.user.jobId
 };

  this.service._get('users', where).subscribe(data => {
    this.applicants = data.docs.map(doc => doc.data());
    console.log(this.applicants)
  });
}




}
 


