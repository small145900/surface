import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


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
			this.userService.doLogin(this.user)
      .then(res => { 
      	if(res.code === 200){
      		this.router.navigate(['repositories'])
      		sessionStorage.setItem("username", user.username)
      	}else if(res.code === 400){
      		this.tips(true)
      		this.errorText = res.data.message
      	}
      },error => this.errorMsg = <any>error);
		}
		// else if(!user.username){
		// 	this.tips.username = true;
		// }else if(!user.password){
		// 	this.tips.password = true;
		// }
		
    // this.router.navigate(['repositories']);
	}

	tips(val){
		this.isTips = val
		if(val){
			setTimeout(function(){
				this.tips(false)
			}.bind(this),4000)
		}
	}
}