import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { OrgService } from './org.service';
import { RepoService } from './repo.service';


@Component({
  selector: 'org-create',
  templateUrl: '../templates/organization/orgCreate.html'
})

export class OrgCreateComponent implements OnInit {
	errorMsg: string;
	step = 3;
	repo = {
		username:'',
		id: '',
		repository: '',
		short: '',
		description: '',
		privilege: "public"
	};
	org = {
		namespace: '',
		'full-name': '',
		description: '',
		location: '',
		gravatar: '',
		url: '',
		email: ''
	};

	team = {
		name: "",
		title: "",
		description: "",
		orgName: ""
	};

	teamList = [];

	currentTeam = '';

	chosedTeam = '';
	isShowTeam = false;

	member = {
		name: '',
	}
	memberList = [];

	promptInfo = {
    isShow: false,
    text: ''
  }

	constructor(
		private router: Router,
		private orgService: OrgService,
		private repoService: RepoService){ 
		this.changeTitle('- orgCreate')
	}

	ngOnInit(): void {
		// if(!sessionStorage.getItem("username")){
		// 	this.router.navigate(['login']);
		// }
  }

  changeTitle(val) {
		var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
		this.orgService.changeTitle(title)
	}

	changeStep(step) {
		this.step = step
	}

	saveOrgInfo(step){
		console.log(this.org)
		var org = this.org
		if(org.namespace && org['full-name']&&org.description){
			this.orgService.orgCreate(this.org)
      .then(res => {
      	if(res.code === 201){
      		this.changeStep(step)
      		// this.getTeamList()

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
		}
		// else if(!org.location){
		// 	this.isShowPrompt(true,'please input location')
		// }else if(!org.gravatar){
		// 	this.isShowPrompt(true,'please input gravatar')
		// }else if(org.gravatar&&org.gravatar.indexOf('@')===-1){
		// 	this.isShowPrompt(true,'gravatar is invalid')
		// }else if(!org.url){
		// 	this.isShowPrompt(true,'please input url')
		// }else if(!org.email){
		// 	this.isShowPrompt(true,'please input email')
		// }
	}

	saveTeamInfo(){
		var team = this.team;
		if(team.name && team.title && team.description){
			team.orgName = this.org.namespace
			this.orgService.teamCreate(this.org)
      .then(res => {
      	if(res.code === 201){
      		this.isShowPrompt(true,'create team success')
      		this.getTeamList()
      	}else{
      		this.isShowPrompt(true,res.data.message)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!team.name){
			this.isShowPrompt(true,'please input name')
		}else if(!team.title){
			this.isShowPrompt(true,'please input title')
		}else if(!team.description){
			this.isShowPrompt(true,'please input description')
		}
	}

	getTeamList(){
		this.orgService.getTeamList(this.org.namespace)
    .then(res => {
    	if(res.code === 200){
	    	this.teamList = res.data
    	}else{
    		this.isShowPrompt(true,res.data.message)
    	}
    },error => this.errorMsg = <any>error);
	}

	getMemberList(team){
		this.currentTeam = team.name;
		this.orgService.getMemberList(team.name,this.org.namespace)
    .then(res => {
    	if(res.code === 200){
	    	this.memberList = res.data
    	}else{
    		this.isShowPrompt(true,res.data.message)
    	}
    },error => this.errorMsg = <any>error);
	}

	addMember(){
		var member = this.member;
		if(member.name&&this.currentTeam){
			this.orgService.addMember(member.name,this.currentTeam,this.org.namespace)
	    .then(res => {
	    	if(res.code === 200){
		    	this.memberList = res.data
	    	}else{
	    		this.isShowPrompt(true,res.data.message)
	    	}
	    },error => this.errorMsg = <any>error);
		}else if(!member.name){
			this.isShowPrompt(true,'no member name')
		}else if(!this.currentTeam){
			this.isShowPrompt(true,'please choose team')
		}
	}

	delMember(member){
		this.orgService.delMember(member.name,this.currentTeam,this.org.namespace)
    .then(res => {
    	if(res.code === 200){
	    	this.memberList = res.data
    	}else{
    		this.isShowPrompt(true,res.data.message)
    	}
    },error => this.errorMsg = <any>error);
	}

	showOptions(){
		this.isShowTeam = !this.isShowTeam;
	}

	choseTeam(team){
		this.chosedTeam = team.name;
		this.isShowTeam = false;
	}

	saveRepoInfo(){
		var repo = this.repo;
		if(this.org.namespace&&repo.repository&&repo.short&&repo.privilege){
			repo.username = this.org.namespace
			this.repoService.repoCreate(repo)
      .then(res => {
      	if(res.code === 201){
      		this.router.navigate(['organizations']);
      	}else{
      		this.isShowPrompt(true,res.data.message)
      	}
      },error => this.errorMsg = <any>error);
		}else if(!repo.username){
			this.isShowPrompt(true,'please choose namespace')
		}else if(!repo.repository){
			this.isShowPrompt(true,'please input repository name')
		}else if(!repo.short){
			this.isShowPrompt(true,'please input short description')
		}
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