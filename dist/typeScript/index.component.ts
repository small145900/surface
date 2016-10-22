import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-index',
  templateUrl: '../templates/common/index.html'
})

export class IndexComponent implements OnInit { 
	errorMsg: string;
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
}