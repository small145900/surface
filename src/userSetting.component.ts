import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'user-setting',
  templateUrl: '../templates/user/setting.html'
})
export class UserSettingComponent implements OnInit {
	errorMsg: string;
	user = {
		username: 'test'
	}
	emailList = []

	constructor(private userService: UserService){ }

	ngOnInit(): void {
    this.userService.getEmailList(this.user)
      .then(res => { this.emailList = res; console.log(res)},
            error => this.errorMsg = <any>error);
  }

	addEmail(){
		console.log(this.user)
		this.userService.addEmail(this.user)
      .then(res => { if(res.code === 200){}},
            error => this.errorMsg = <any>error);
	}

	sendEmail(info){
		this.userService.sendEmail(info,this.user)
      .then(res => { if(res.code === 200){}},
            error => this.errorMsg = <any>error);
	}

	delEmail(info){
		this.userService.delEmail(info,this.user)
      .then(res => { if(res.code === 200){}},
            error => this.errorMsg = <any>error);
	}
}