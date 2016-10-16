import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'login',
  templateUrl: '../templates/common/login.html'
})

export class LoginComponent { 
	errorMsg: string;
	user = {}
	constructor(
		private router: Router,
	 	private userService: UserService){
	}

	login() {
		console.log(this.user)
		// this.userService.doLogin(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}
}