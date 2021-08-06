import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPage } from './job.page';

const routes: Routes = [
  {
    path: '',
    component: JobPage
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'applicants',
    loadChildren: () => import('./applicants/applicants.module').then( m => m.ApplicantsPageModule)
  },
  {
    path: 'confirmed',
    loadChildren: () => import('./confirmed/confirmed.module').then( m => m.ConfirmedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPageRoutingModule {}
