import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpportunitiesPageRoutingModule } from './opportunities-routing.module';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { OpportunitiesPage } from './opportunities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpportunitiesPageRoutingModule
  ],
  providers: [File,FileTransfer,DocumentViewer],

  declarations: [OpportunitiesPage]
})
export class OpportunitiesPageModule {}
