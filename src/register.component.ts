import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'register',
  templateUrl: '../templates/common/register.html'
})

export class RegisterComponent implements OnInit { 
	errorMsg: string;
	isTips = {
    username: false,
    email: false,
    isEmailRight: false,
    password: false,
		pwdError: false,
    otherError: false
  }
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
		this.userService.changeTitle('register')
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
		var pwdReg=/(?![0-9a-z]+$)(?![a-zA-Z]+$){8,}/
		console.log(/(?![0-9a-z]+$)(?![a-zA-Z]+$){8,}/.test(user.password))
		if(user.username&&user.password&&pwdReg.test(user.password)&&user.password.indexOf(''+user.username)===-1&&user.email){
			this.userService.signUp(this.user)
      .then(res => { 
      	if(res.code === 201){
      		this.router.navigate(['repositories'])
      		sessionStorage.setItem("username", user.username)
      	}else{
      		this.tips('otherError',true)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!user.username){
			this.tips('username',true)
		}else if(!user.password){
			this.tips('password',true)
		}else if(!(user.password&&pwdReg.test(user.password)&&user.password.indexOf(''+user.username)===-1)){
			this.tips('pwdError',true)
		}else if(!user.email){
			this.tips('email',true)
		}else if(!(user.email&&user.email.indexOf('@')!==-1)){
			this.tips('isEmailRight',true)
		}	
    // this.router.navigate(['repositories']);
	}

	tips(name,val){
		this.isTips[name] = val;
		if(val){
			setTimeout(function(){
				this.tips(name,false)
			}.bind(this),4000)
		}
	}
}