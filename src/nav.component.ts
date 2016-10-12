import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: '../templates/common/nav.html'
})

export class NavComponent {
	constructor(private router: Router) {}

  linkComp(path){
    this.router.navigate([path]);
    // this.router.navigate(["repoDetail",5]);
  }
}