import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'login',
  templateUrl: '../templates/common/login.html'
})

export class LoginComponent { 
	errorMsg: string;
	user = {
		username: '',
		email: '',
		password: '',
		're-password': ''
	}
	active = ''

	constructor(
		private router: Router,
	 	private userService: UserService){
	}

	changeNav(val){
		this.user = {
			username: '',
			email: '',
			password: '',
			're-password': ''
		}
		this.active = val
	}

	login() {
		console.log(this.user)
		// this.userService.doLogin(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}

	signUp() {
		console.log(this.user)
		// this.userService.signUp(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}
	
	sendEmail() {
		console.log(this.user)
		// this.userService.sendEmail(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}

	resetPwd() {
		console.log(this.user)
		// this.userService.resetPwd(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}
}