import { Component } from '@angular/core';

@Component({
  selector: 'org-create',
  templateUrl: '../templates/organization/orgCreate.html'
})

export class OrgCreateComponent {
	step = 1;
	org = {};

	constructor(){ }

	changeStep(step) {
		this.step = step
	}

	saveOrgInfo(step){
		console.log(this.org)
		this.changeStep(step)
	}
}