import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'nav-bar',
  templateUrl: '../templates/common/nav.html'
})

export class NavComponent {
	errorMsg: string;
	user = {
		username: 'test'
	}
	private active = 'repo'

	constructor(
		private router: Router,
		private userService: UserService){
	}

  linkComp(path,nav){
  	this.active = nav
    this.router.navigate([path]);
    // this.router.navigate(["repoDetail",5]);
  }

  loginOut(){
  	// this.userService.loginOut(this.user)
   //    .then(res => { if(res.code === 200){this.router.navigate([''])}},
   //          error => this.errorMsg = <any>error);
   this.router.navigate([''])
  }
}