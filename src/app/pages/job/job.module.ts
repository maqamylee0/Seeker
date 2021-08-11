import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JobPageRoutingModule } from './job-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { JobPage } from './job.page';
import { AboutPage } from './about/about.page';
import { ApplicantsPage } from './applicants/applicants.page'

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
        path: 'applicants',
        children: [
          {
            path: '',
            component:ApplicantsPage
          }
        ]
      },
      // {
      //   path: 'confirmed',
      //   children: [
      //     {
      //       path: '',
      //       component:ConfirmedPage
      //     }
      //   ]
      // },
      {
       path: '',
       redirectTo: '/job/about',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/job/applicants',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPageRoutingModule
  ],
  declarations: [JobPage,AboutPage,ApplicantsPage]
})
export class JobPageModule {}
