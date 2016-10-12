import { Component } from '@angular/core';
import { NavComponent } from './nav.component';


@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
              <nav-bar></nav-bar>
              <router-outlet></router-outlet>
            </div>`
  // styleUrls: ['app/app.component.css'],
})
export class AppComponent { }
