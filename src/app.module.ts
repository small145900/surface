import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentModule }  from './content.module';

import { AppComponent }  from './app.component';
// import { NavComponent }  from './nav.component';
import { LoginComponent }  from './login.component';
// import { RepoListComponent }  from './repoList.component';
// import { RepoCreateComponent }  from './repoCreate.component';
// import { RepoDetailComponent } from './repoDetail.component';
// import { OrgListComponent }      from './orgList.component';
// import { OrgCreateComponent }      from './orgCreate.component';
// import { UserSettingComponent }      from './userSetting.component';

// import { OrgService }      from './org.service';
// import { RepoService }      from './repo.service';
import { UserService }      from './user.service';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';


@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    ContentModule,
  	routing
  ],
  declarations: [ 
  	AppComponent,
    LoginComponent
  	// NavComponent, 
  	// RepoListComponent, 
  	// RepoCreateComponent,
   //  RepoDetailComponent,
  	// OrgListComponent,
  	// OrgCreateComponent,
   //  UserSettingComponent
  ],
  providers: [
    // OrgService,
    // RepoService
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
