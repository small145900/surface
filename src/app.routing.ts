import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent }  from './index.component';
import { LoginComponent }  from './login.component';
import { RegisterComponent }  from './register.component';
import { ForgetPwdComponent }  from './forgetPassword.component';
import { ResetPwdComponent }  from './resetPassword.component';
import { BrowseComponent }  from './browse.component';
import { BrochurComponent }  from './brochur.component';
import { ContactComponent }  from './contact.component';
import { ContentComponent }  from './content.component';
import { UserRepoComponent }  from './userRepo.component';
import { BrowseDetailComponent }  from './browseDetail.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'brochur',
    component: BrochurComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPwdComponent
  },
  {
    path: 'resetPassword',
    component: ResetPwdComponent
  },
  {
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'user/:username',
    component: UserRepoComponent
  },
  {
    path: 'detail/:repoName',
    component: BrowseDetailComponent
  },
  {
    path: 'content',
    component: ContentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);