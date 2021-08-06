import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmedPage } from './confirmed.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedPageRoutingModule {}
