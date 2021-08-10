import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprofilePage } from './addprofile.page';

const routes: Routes = [
  {
    path: '',
    component: AddprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprofilePageRoutingModule {}
