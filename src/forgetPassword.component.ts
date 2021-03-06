import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'forget-password',
  templateUrl: '../templates/common/forgetPassword.html'
})

export class ForgetPwdComponent implements OnInit { 
	errorMsg: string;
	isTips = {
		otherError: false
	}
	user = {
		email: ''
	}
	active = '';
	browseList = [];
	hover = '';

	constructor(
		private router: Router,
	 	private userService: UserService){
		this.changeTitle('- forgetpwd')
	}

	ngOnInit(): void {}

	changeTitle(val) {
		var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
		this.userService.changeTitle(title)
	}
	
  activeHover(index){
  	this.hover = index;
  	console.log(index)
  }

	changeNav(val){
		// this.active = val
    this.router.navigate([val]);
	}
	
	sendEmail() {
		console.log(this.user)
		var user = this.user;
		if(this.user.email&&this.user.email.indexOf('@')!==-1){
			this.userService.sendEmail(this.user)
      .then(res => { 
      	if(res.code === 200){
      		this.router.navigate(['repositories'])
      	}else if(res.code === 400){
      		this.tips('otherError',true)
      		setTimeout(function(){
      			this.tips('otherError',false)
      		}.bind(this),3000)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!user.email){
			alert('please input correct email')
		}else if(!(user.email&&this.user.email.indexOf('@')!==-1)){
			alert('please input correct email')
		}
		
    // this.router.navigate(['repositories']);
	}

	tips(name,val){
		this.isTips[name] = val;
	}
}