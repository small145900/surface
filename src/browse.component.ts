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
	}

	ngOnInit(): void {
		this.userService.getBrowseList()
    .then(res => {
    	if(res.code === 200){
    		this.browseList = res.list      
    	}else{
    		alert(res.message)
    	}
    },error => this.errorMsg = <any>error);
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