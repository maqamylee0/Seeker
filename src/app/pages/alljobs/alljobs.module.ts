import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlljobsPageRoutingModule } from './alljobs-routing.module';

import { AlljobsPage } from './alljobs.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlljobsPageRoutingModule,
    Ng2SearchPipeModule
    
  ],
  declarations: [AlljobsPage]
})
export class AlljobsPageModule {}
