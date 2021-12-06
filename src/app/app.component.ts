import { Component } from '@angular/core';
//import { SplashScreen } from '@capacitor/splash-screen';
import { ModalController } from '@ionic/angular';
import {SplashComponent}  from './splash/splash.component'

// SplashScreen.show({
//   showDuration: 2000,
//   autoHide: false,
// });

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private modalController: ModalController) {
    this.presentModal();
  }
  async presentModal() {
    // create the modal with the `modal-page` component
    const modal = await this.modalController.create({
      component : SplashComponent,
      cssClass :'my-custom-class'
    });   
  
    // present the modal
    return await modal.present();
  }
}
