import { Component } from '@angular/core';

@Component({
  selector: 'org-create',
  templateUrl: '../templates/organization/orgCreate.html'
})

export class OrgCreateComponent {
	constructor(){
		this.step = 1;
		this.org = {};
	}

	changeStep(step) {
		this.step = step
	}

	saveOrgInfo(step){
		console.log(this.org)
		this.changeStep(step)
	}
}