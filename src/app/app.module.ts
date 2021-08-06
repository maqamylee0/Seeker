import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebase,'Seeker'),
  AngularFirestoreModule, // firestore
  AngularFireAuthModule, // auth
  AngularFireStorageModule ,// storage
  BrowserModule,
  FormsModule, //forms module
  CommonModule,
  IonicModule.forRoot(), 
  AppRoutingModule],
   
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
