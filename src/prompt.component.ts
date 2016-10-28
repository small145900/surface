import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'prompt',
  templateUrl: '../templates/common/prompt.html'
})

export class PromptComponent { 
	@Input()
	promptInfo: Object;

	constructor(
		private router: Router){
	}
}