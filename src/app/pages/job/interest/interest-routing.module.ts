import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestPage } from './interest.page';

const routes: Routes = [
  {
    path: '',
    component: InterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestPageRoutingModule {}
