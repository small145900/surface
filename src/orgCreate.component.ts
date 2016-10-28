import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { OrgService } from './org.service';


@Component({
  selector: 'org-create',
  templateUrl: '../templates/organization/orgCreate.html'
})

export class OrgCreateComponent implements OnInit {
	errorMsg: string;
	step = 1;
	repo = {};
	org = {
		namespace: '',
		'full-name': '',
		description: '',
		location: '',
		gravatar: '',
		url: '',
		email: ''
	};
	team = {};
	promptInfo = {
    isShow: false,
    text: ''
  }

	constructor(
		private router: Router,
		private orgService: OrgService){ 
	}

	ngOnInit(): void {
		console.log(222)
		// if(!sessionStorage.getItem("username")){
		// 	this.router.navigate(['login']);
		// }
  }

	changeStep(step) {
		this.step = step
	}

	saveOrgInfo(step){
		console.log(this.org)
		var org = this.org
		if(org.namespace && org['full-name']&&org.description&&org.location&&org.gravatar&&org.url&&org.email){
			this.orgService.orgCreate(this.org)
      .then(res => {
      	if(res.code === 201){
      		this.changeStep(step)
      	}else{
      		this.isShowPrompt(true,res.data.message)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!org.namespace){
			this.isShowPrompt(true,'please input namespace')
		}else if(!org['full-name']){
			this.isShowPrompt(true,'please input full name')
		}else if(!org.description){
			this.isShowPrompt(true,'please input description')
		}else if(!org.location){
			this.isShowPrompt(true,'please input location')
		}else if(!org.gravatar){
			this.isShowPrompt(true,'please input gravatar')
		}else if(org.gravatar&&org.gravatar.indexOf('@')===-1){
			this.isShowPrompt(true,'gravatar is invalid')
		}else if(!org.url){
			this.isShowPrompt(true,'please input url')
		}else if(!org.email){
			this.isShowPrompt(true,'please input email')
		}
	}

	saveTeamInfo(){
		console.log(this.team)
	}

	isShowPrompt(boolean,text){
    this.promptInfo = {
      isShow: boolean,
      text: text
    }
    if(boolean){
      setTimeout(function(){
        this.isShowPrompt(false,'')
      }.bind(this),2000)
    }
  }
}