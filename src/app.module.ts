import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { NavComponent }  from './nav.component';

import { RepoListComponent }  from './repoList.component';
import { RepoCreateComponent }  from './repoCreate.component';
import { RepoDetailComponent } from './repoDetail.component';

import { OrgListComponent }      from './orgList.component';
import { OrgCreateComponent }      from './orgCreate.component';
import { UserSettingComponent }      from './userSetting.component';

import { routing } from './app.routing';

@NgModule({
  imports: [ 
  	BrowserModule,
  	routing
  ],
  declarations: [ 
  	AppComponent, 
  	NavComponent, 
  	RepoListComponent, 
  	RepoCreateComponent,
    RepoDetailComponent,
  	OrgListComponent,
  	OrgCreateComponent,
    UserSettingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
