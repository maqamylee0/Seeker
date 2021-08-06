import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { ApiService} from '../services/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.page.html',
  styleUrls: ['./myapplications.page.scss'],
})
export class MyapplicationsPage implements OnInit {

  user: any;
  constructor(
    public data:DataService,
    public api:ApiService,
    public actionSheetController: ActionSheetController,
    public toast:ToastController,
    public router:Router
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();
  }
  goToOpportunities(){
    this.router.navigate(['/opportunities'])
  }
}
