import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {NgClass} from '@angular/common';
import { RepoService } from './repo.service';
import { OrgService } from './org.service';
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
	chosedOrgName = '';
	repo = {};
	orgList = [];

	constructor(
		private http: Http,
		private repoService: RepoService,
		private orgService: OrgService){
	}

	ngOnInit(): void {
		// if(sessionStorage.getItem("username")){
			this.orgService.getOrgList()
	      .then(res => {
	        // if(res.code === 200){
	        //   this.orgList = res.data
	        // }else{
	        //   console.log('get org list err',res)
	        // }
	      },error => this.errorMsg = <any>error);
		// }
  }

  choseOrg(orgInfo) {
  	this.chosedOrgName = orgInfo.name
  	this.isShowOrg = false
  }

	changeStep(step) {
		this.step = step
	}

	saveRepoInfo(step){
		console.log(this.repo)
		this.repoService.repoCreate(this.repo)
      .then(res => {},
            error => this.errorMsg = <any>error);
	}
}