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
  }

  changeNav(val){
		// this.active = val
    this.router.navigate([val]);
	}

	signUp() {
		console.log(this.user)
		var user = this.user;
		if(user.username&&user.password&&user.email){
			this.userService.signUp(this.user)
      .then(res => { 
      	if(res.code === 201){
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
		}else if(!user.email){
			alert('please input email')
		}else if(!(user.email&&user.email.indexOf('@')!==-1)){
			alert('please input correct email')
		}
		
    // this.router.navigate(['repositories']);
	}
}