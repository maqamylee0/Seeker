import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JobPageRoutingModule } from './job-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { JobPage } from './job.page';
import { AboutPage } from './about/about.page';
import { EditJobPage } from './editjob/editjob.page'

const routes: Routes = [
  {
    path: '',
    component: JobPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component:AboutPage
          }
        ]
      },
      {
        path: 'editjob',
        children: [
          {
            path: '',
            component:EditJobPage
          }
        ]
      },
      
      {
       path: '',
       redirectTo: '/job/about',
        pathMatch: 'full'
      },
      
    ]
  },
  
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPageRoutingModule
  ],
  declarations: [JobPage]
})
export class JobPageModule {}
