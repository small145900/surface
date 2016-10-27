import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'login',
  templateUrl: '../templates/common/browse.html'
})

export class BrowseComponent implements OnInit { 
	errorMsg: string;
	user = {
		username: ''
	}
	active = '';
	browseList = [];
	hover = '';

	constructor(
		private router: Router,
	 	private userService: UserService){
		this.userService.changeTitle('browse')
	}

	ngOnInit(): void {
		this.userService.getBrowseList()
    .then(res => {
    	if(res.code === 200){
    		console.log(res.data)
    		this.browseList = res.data      
    	}else if(400 <= res.code && res.code < 500){
    		console.log(res.code)
    	}
    },error => {this.errorMsg = <any>error;console.log(error)});
  }

  activeHover(index){
  	this.hover = index;
  	console.log(index)
  }

	changeNav(val){
		// this.active = val
    this.router.navigate([val]);
	}
}