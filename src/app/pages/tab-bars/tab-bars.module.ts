import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabBarsPageRoutingModule } from './tab-bars-routing.module';

import { TabBarsPage } from './tab-bars.page';
import { OpportunitiesPage } from '../opportunities/opportunities.page';
import { MyapplicationsPage } from '../myapplications/myapplications.page';
import { PreferencesPage } from '../preferences/preferences.page';
import { ProfilePage } from '../profile/profile.page';



const routes: Routes = [
  {
    path: '',
    component: TabBarsPage,
    children: [
      {
        path: 'opportunities',
        children: [
          {
            path: '',
            component:OpportunitiesPage
          }
        ]
      },
      {
        path: 'myapplications',
        children: [
          {
            path: '',
            component:MyapplicationsPage
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            component:ProfilePage
          }
        ]
      },
      {
       path: '',
       redirectTo: '/tab-bars/opportunities',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/tab-bars/opportunities',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarsPageRoutingModule
  ],
  declarations: [TabBarsPage,OpportunitiesPage,MyapplicationsPage,ProfilePage]
})
export class TabBarsPageModule {}
