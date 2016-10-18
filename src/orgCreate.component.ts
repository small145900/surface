import { Component } from '@angular/core';
import { OrgService } from './org.service';


@Component({
  selector: 'org-create',
  templateUrl: '../templates/organization/orgCreate.html'
})

export class OrgCreateComponent {
	errorMsg: string;
	step = 1;
	org = {};
	repo = {};
	team = {};

	constructor(private orgService: OrgService){ }

	changeStep(step) {
		this.step = step
	}

	saveOrgInfo(step){
		console.log(this.org)
		// this.orgService.orgCreate(this.org)
  //     .then(res => {if(res.code === 201){this.changeStep(step)}},
  //           error => this.errorMsg = <any>error);
  	this.changeStep(step)
	}

	saveTeamInfo(){
		console.log(this.team)
	}
}