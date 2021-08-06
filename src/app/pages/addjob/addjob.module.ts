import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddjobPageRoutingModule } from './addjob-routing.module';

import { AddjobPage } from './addjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddjobPageRoutingModule
  ],
  declarations: [AddjobPage]
})
export class AddjobPageModule {}
