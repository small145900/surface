import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PromptComponent }  from './prompt.component';
import { TestComponent }  from './test.component';

import { HttpModule }    from '@angular/http';


@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule
  ],
  declarations: [ 
    PromptComponent,
    TestComponent
  ],
  providers: [],
  bootstrap: [ TestComponent ]
})
export class PromptModule { }
