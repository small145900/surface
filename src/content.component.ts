import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-content',
  template: `<div class="container-fluid">
              <nav-bar></nav-bar>
              <router-outlet></router-outlet>
            </div>`
})
export class ContentComponent { }