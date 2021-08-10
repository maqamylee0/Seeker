import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprofilePageRoutingModule } from './addprofile-routing.module';

import { AddprofilePage } from './addprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprofilePageRoutingModule
  ],
  declarations: [AddprofilePage]
})
export class AddprofilePageModule {}
