import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Org } from './org';
import { OrgService } from './org.service';


@Component({
  selector: 'org-list',
  templateUrl: '../templates/organization/orgList.html'
})

export class OrgListComponent implements OnInit {
  errorMsg: string;
  // orgList: Org[] = [];
	orgList = [];

	constructor(
		private router: Router,
    private orgService: OrgService){
	}

  ngOnInit(): void {
    this.orgService.getOrgList()
      .then(res => {
        // if(res.code === 200){
        //   this.orgList = res.data
        // }else{
        //   console.log('get org list err',res)
        // }
      },error => this.errorMsg = <any>error);
  }

  // gotoDetail(repo: Repo): void {
  //   let link = ['repoDetail', repo.namespace,repo.repository];
  //   this.router.navigate(link);
  // }
  orgCreate(path){
    this.router.navigate([path]);
  }
}