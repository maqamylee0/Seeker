import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpportunitiesPageRoutingModule } from './opportunities-routing.module';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { OpportunitiesPage } from './opportunities.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpportunitiesPageRoutingModule,
    Ng2SearchPipeModule

  ],
  providers: [File,FileTransfer,DocumentViewer],

  declarations: [OpportunitiesPage]
})
export class OpportunitiesPageModule {}
