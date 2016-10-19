import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login.component';
import { ContentComponent }  from './content.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'content',
    component: ContentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);