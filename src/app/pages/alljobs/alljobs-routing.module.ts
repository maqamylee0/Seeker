import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlljobsPage } from './alljobs.page';

const routes: Routes = [
  {
    path: '',
    component: AlljobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlljobsPageRoutingModule {}
