import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent }  from './content.component';
import { RepoListComponent }  from './repoList.component';
import { RepositoriesComponent }  from './repositories.component';
import { RepoCreateComponent }  from './repoCreate.component';
import { RepoDetailComponent } from './repoDetail.component';


import { OrgListComponent }      from './orgList.component';
import { OrgCreateComponent }      from './orgCreate.component';
import { OrgEditComponent }      from './orgEdit.component';

import { UserSettingComponent }      from './userSetting.component';

const contentRouting: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'repositories', component: RepoListComponent },
      { path: 'organizations/:orgName', component: RepositoriesComponent },
      { path: 'repoCreate', component: RepoCreateComponent },
      { path: 'repositories/:repoName', component: RepoDetailComponent },
      { path: 'organizations', component: OrgListComponent },
      { path: 'orgCreate', component: OrgCreateComponent },
      { path: 'orgEdit/:orgName', component: OrgEditComponent },
      { path: 'userSetting', component: UserSettingComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(contentRouting);