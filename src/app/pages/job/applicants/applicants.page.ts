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

  constructor(
    public data:DataService,
    public api:ApiService,
    public actionSheetController: ActionSheetController,
    public toast:ToastController,
    public router:Router
  ) { }

  ngOnInit() {
  }

}
