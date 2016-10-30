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
	private active = 'login'

	constructor(
		private router: Router,
		private userService: UserService){
	}

  changeNav(nav){
    this.active = nav
  }

  linkComp(path,nav){
    this.changeNav(nav)
    this.router.navigate([path]);
    // this.router.navigate(["repoDetail",5]);
  }

  loginOut(){
  	this.userService.loginOut(this.user)
      .then(res => {
          if(res.code === 200){
            sessionStorage.setItem("username", '')
            this.router.navigate([''])
          }
        },error => this.errorMsg = <any>error);
  }
}