import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import * as md5 from "blueimp-md5/js/md5";


@Component({
  selector: 'login',
  templateUrl: '../templates/common/login.html'
})

export class LoginComponent implements OnInit { 
	errorMsg: string;
	isTips = false;
	errorText = '';
	user = {
		username: '',
		password: ''
	}
	active = '';
	browseList = [];
	hover = '';

	constructor(
		private router: Router,
	 	private userService: UserService){
		this.userService.changeTitle('login')
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

	login() {
		console.log(this.user)
		var user = this.user;
		if(user.username&&user.password){
			var data = {
				username: user.username,
				password: md5(user.password)
			}
			this.userService.doLogin(data)
      .then(res => { 
      	if(res.code === 200){
      		this.router.navigate(['repositories'])
      		sessionStorage.setItem("username", user.username)
      	}
      },error => {
      	if(400 <= error.code && error.code < 500){
      		this.tips(true)
      		this.errorText = error.data.message
      	}
      });
		}
		// else if(!user.username){
		// 	this.tips.username = true;
		// }else if(!user.password){
		// 	this.tips.password = true;
		// }
		
    // this.router.navigate(['repositories']);
	}

	// toLogin(envet){
	// 	console.log(event)
	// }
	tips(val){
		this.isTips = val
		if(val){
			setTimeout(function(){
				this.tips(false)
			}.bind(this),4000)
		}
	}
}