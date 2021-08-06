import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyapplicationsPage } from './myapplications.page';

const routes: Routes = [
  {
    path: '',
    component: MyapplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyapplicationsPageRoutingModule {}
