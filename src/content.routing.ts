import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent }  from './content.component';
import { RepoListComponent }  from './repoList.component';
import { RepoCreateComponent }  from './repoCreate.component';
import { RepoDetailComponent } from './repoDetail.component';


import { OrgListComponent }      from './orgList.component';
import { OrgCreateComponent }      from './orgCreate.component';

import { UserSettingComponent }      from './userSetting.component';

const contentRouting: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'repositories', component: RepoListComponent },
      { path: 'repoCreate', component: RepoCreateComponent },
      { 
        path: 'repoDetail', 
        component: RepoDetailComponent
        
      },
      { path: 'organizations', component: OrgListComponent },
      { path: 'orgCreate', component: OrgCreateComponent },
      { path: 'userSetting', component: UserSettingComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(contentRouting);