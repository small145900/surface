import { Component } from '@angular/core';
import { NavComponent } from './nav.component';


@Component({
  selector: 'my-app',
  // template: `<div class="container-fluid">
  //             <nav-bar></nav-bar>
  //             <router-outlet></router-outlet>
  //           </div>`
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { }
