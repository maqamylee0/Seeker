import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)  },
  
  { path: '',redirectTo: 'preferences', pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'opportunities',
    loadChildren: () => import('./pages/opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
  },
  
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'addjob',
    loadChildren: () => import('./pages/addjob/addjob.module').then( m => m.AddjobPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./pages/job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'job-detail',
    loadChildren: () => import('./pages/job-detail/job-detail.module').then( m => m.JobDetailPageModule)
  },
  {
    path: 'addprofile',
    loadChildren: () => import('./pages/addprofile/addprofile.module').then( m => m.AddprofilePageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'alljobs',
    loadChildren: () => import('./pages/alljobs/alljobs.module').then( m => m.AlljobsPageModule)
  },
  {
    path: 'interest',
    loadChildren: () => import('./pages/job/interest/interest.module').then( m => m.InterestPageModule)
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
