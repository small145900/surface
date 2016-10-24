import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'register',
  templateUrl: '../templates/common/register.html'
})

export class RegisterComponent implements OnInit { 
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
	}

	ngOnInit(): void {}
	
  activeHover(index){
  	this.hover = index;
  }

  changeNav(val){
		// this.active = val
    this.router.navigate([val]);
	}

	signUp() {
		console.log(this.user)
		// this.userService.signUp(this.user)
  //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
  //           error => this.errorMsg = <any>error);
    this.router.navigate(['repositories']);
	}
}