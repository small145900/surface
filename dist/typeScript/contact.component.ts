import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'contact',
  templateUrl: '../templates/common/contact.html'
})

export class ContactComponent implements OnInit { 
	errorMsg: string;
	user = {
		username: '',
		email: '',
		password: '',
		're-password': ''
	}
	active = '';
	browseList = [];
	hover = '';
	element;

	constructor(
		private router: Router,
	 	private userService: UserService){
	}

	ngOnInit(): void {
		// console.log($('.content')[0].offsetTop)
	}

	ngAfterViewInit(): void {
		// console.log($('.content').offset().top,111)
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