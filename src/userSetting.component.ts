import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'user-setting',
  templateUrl: '../templates/user/setting.html'
})
export class UserSettingComponent implements OnInit {
	errorMsg: string;
	user = {
		username: ''
	};
	account = {};
	emailList = [];
	promptInfo = {
    isShow: false,
    text: ''
  };

	constructor(
		private route: ActivatedRoute,
		private userService: UserService){ 
		this.changeTitle('- userSetting')
	}

	ngOnInit(): void {
		// if(!sessionStorage.getItem("username")){
		// 	this.router.navigate(['login']);
		// }
    this.getEmailList()
  }

  getEmailList(){
  	this.user.username = sessionStorage.getItem("username")
  	this.userService.getEmailList(this.user)
      .then(res => { 
      		if(res.code === 200){
      			this.emailList = res.data
		      }else{
		      	this.isShowPrompt(true,res.data.message)
		      }
		  	},error => this.errorMsg = <any>error);
  }

	addEmail(){
		console.log(this.user)
		this.userService.addEmail(this.user)
      .then(res => { 
      	if(res.code === 200){
      		this.getEmailList()
				}else{
	      	this.isShowPrompt(true,res.data.message)
	      }
    	},error => this.errorMsg = <any>error);
	}

	verifyEmail(info){
		this.userService.verifyEmail(info,this.user)
      .then(res => { 
      	if(res.code === 200){
      		this.isShowPrompt(true,'send email success')
      	}else{
      		this.isShowPrompt(true,res.data.message)
      	}
      },error => this.errorMsg = <any>error);
	}

	delEmail(info){
		this.userService.delEmail(info,this.user)
      .then(res => { if(res.code === 200){}},
            error => this.errorMsg = <any>error);
	}

	changePassword(){
		console.log(this.user)
	}

	saveAccountInfo(){
		console.log(this.account)
	}

	changeTitle(val) {
		var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
		this.userService.changeTitle(title)
	}

	isShowPrompt(boolean,text){
    this.promptInfo = {
      isShow: boolean,
      text: text
    }
    if(boolean){
      setTimeout(function(){
        this.isShowPrompt(false,'')
      }.bind(this),2000)
    }
  }
}