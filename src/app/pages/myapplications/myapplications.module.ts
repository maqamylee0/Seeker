import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyapplicationsPageRoutingModule } from './myapplications-routing.module';

import { MyapplicationsPage } from './myapplications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyapplicationsPageRoutingModule
  ],
  declarations: [MyapplicationsPage]
})
export class MyapplicationsPageModule {}
