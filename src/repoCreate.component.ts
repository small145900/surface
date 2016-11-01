import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { NgClass } from '@angular/common';
import { RepoService } from './repo.service';
import { OrgService } from './org.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/toPromise';

@Component({
	moduleId: module.id,
  selector: 'repo-create',
  templateUrl: '../templates/repository/repoCreate.html'
})
export class RepoCreateComponent implements OnInit { 
  errorMsg: string;
	step = 0;
	isShowOrg = false;
	repo = {
		username:'',
		id: '',
		repository: '',
		short: '',
		description: '',
		privilege: "public"
	};
	orgList = [];
	promptInfo = {
    isShow: false,
    text: ''
  };

	constructor(
		private router: Router,
		private http: Http,
		private userService: UserService,
		private repoService: RepoService,
		private orgService: OrgService){
		// this.isShowPrompt(true,999)
		this.changeTitle('- repoCreate')
	}

	ngOnInit(): void {
		var username = 'sessionStorage.getItem("username")';
		if(username){
			var orgList = this.orgList;
			this.orgService.getOrgList()
	      .then(res => {
	        if(res.code === 200){
	        	res.data.map(function(r){
	        		if(r.role === 'admin' || r.role === 'write'){
	        			orgList.push(r)
	        		}
	        	})
	        	orgList.push({name: username})
	        	if(orgList.length === 1) {
	        		this.repo.username = orgList[0].name
	        	}
	        }else{
	          console.log('get org list err',res)
	        }
	      },error => this.errorMsg = <any>error);
		}else {
			this.router.navigate(['login']);
		}
  }

  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.userService.changeTitle(title)
  }

  showOptions(){
  	this.isShowOrg = !this.isShowOrg
  	this.changeStep(1)
  }

  choseOrg(orgInfo) {
  	console.log(orgInfo)
  	this.repo.username = orgInfo.name
  	this.repo.id = orgInfo.id
  	this.isShowOrg = false
  }

	changeStep(step) {
		this.step = step
	}

	saveRepoInfo(step){
		console.log(this.repo)
		var repo = this.repo;
		var CanCreateRepo = repo.username
		if(repo.username&&repo.repository&&repo.short&&repo.privilege){
			this.repoService.repoCreate(this.repo)
      .then(res => {
      	if(res.code === 201){
      		this.router.navigate(['repositories']);
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