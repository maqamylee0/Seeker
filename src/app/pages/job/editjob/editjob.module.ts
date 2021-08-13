import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditjobPageRoutingModule } from './editjob-routing.module';

import { EditJobPage } from './editjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditjobPageRoutingModule
  ],
  declarations: [EditJobPage]
})
export class EditjobPageModule {}
