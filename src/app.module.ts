import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { ContentModule }  from './content.module';

import { AppComponent }  from './app.component';
// import { HeaderComponent }  from './header.component';
// import { FooterComponent }  from './footer.component';
import { IndexComponent }  from './index.component';
import { LoginComponent }  from './login.component';
import { RegisterComponent }  from './register.component';
import { ForgetPwdComponent }  from './forgetPassword.component';
import { ResetPwdComponent }  from './resetPassword.component';
import { BrowseComponent }  from './browse.component';
import { ContactComponent }  from './contact.component';
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
    IndexComponent,
    LoginComponent,
  	RegisterComponent, 
  	ForgetPwdComponent, 
  	ResetPwdComponent,
    BrowseComponent,
  	ContactComponent
  ],
  providers: [
    UserService,
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
