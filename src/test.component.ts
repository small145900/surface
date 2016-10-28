import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'brochur',
  templateUrl: '../templates/common/brochur.html'
})

export class TestComponent implements OnInit { 
	constructor(
		private router: Router,
	 	private userService: UserService){
		this.userService.changeTitle('brochur')
	}

	ngOnInit(): void {
	
  }

	changeNav(val){
    this.router.navigate([val]);
	}
}