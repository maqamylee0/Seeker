import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestPageRoutingModule } from './interest-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { InterestPage } from './interest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InterestPage]
})
export class InterestPageModule {}
