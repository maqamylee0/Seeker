import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantsPage } from './applicants.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantsPageRoutingModule {}
