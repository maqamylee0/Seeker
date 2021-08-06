import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddjobPage } from './addjob.page';

const routes: Routes = [
  {
    path: '',
    component: AddjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddjobPageRoutingModule {}
