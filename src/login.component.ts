import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'login',
  templateUrl: '../templates/common/login.html'
})

export class LoginComponent implements OnInit { 
	errorMsg: string;
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
      	}else{
      		alert(res.message)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!user.username){
			alert('please input username')
		}else if(!user.password){
			alert('please input password')
		}
		
    // this.router.navigate(['repositories']);
	}
}