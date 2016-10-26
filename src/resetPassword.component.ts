import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'reset-password',
  templateUrl: '../templates/common/resetPassword.html'
})

export class ResetPwdComponent implements OnInit { 
	errorMsg: string;
	user = {
		username: '',
		email: '',
		password: '',
		're-password': ''
	}
	active = '';
	browseList = [];
	hover = '';

	constructor(
		private router: Router,
	 	private userService: UserService){
		this.userService.changeTitle('resetpassword')
	}
	
	ngOnInit(): void {}
	
  activeHover(index){
  	this.hover = index;
  	console.log(index)
  }

	changeNav(val){
		// this.active = val
    this.router.navigate([val]);
	}

	resetPwd() {
		console.log(this.user)
		this.userService.resetPwd(this.user)
      .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
            error => this.errorMsg = <any>error);
    // this.router.navigate(['repositories']);
	}
}