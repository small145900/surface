import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login.component';
import { ContentComponent }  from './content.component';
// import { RepoListComponent }  from './repoList.component';
// import { RepoCreateComponent }  from './repoCreate.component';
// import { RepoDetailComponent } from './repoDetail.component';

// import { OrgListComponent }      from './orgList.component';
// import { OrgCreateComponent }      from './orgCreate.component';

// import { UserSettingComponent }      from './userSetting.component';

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
  // {
  //   path: 'repoCreate',
  //   component: RepoCreateComponent
  // },
  // {
  //   path: 'repoDetail',
  //   component: RepoDetailComponent
  // },
  // {
  //   path: 'repoDetail/:repoId',
  //   component: RepoDetailComponent
  // },
  // {
  //   path: 'organizations',
  //   component: OrgListComponent
  // },
  // {
  //   path: 'orgCreate',
  //   component: OrgCreateComponent
  // },
  // {
  //   path: 'userSetting',
  //   component: UserSettingComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);