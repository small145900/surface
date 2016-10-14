import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Org } from './org';
import { OrgService } from './org.service';


@Component({
	moduleId: module.id,
  selector: 'org-list',
  templateUrl: '../templates/organization/orgList.html'
})

export class OrgListComponent implements OnInit {
	orgList: Org[] = [];

	constructor(
		private router: Router,
    private orgService: OrgService){
	}

  ngOnInit(): void {
    this.orgService.getOrgList()
      .then(orgList => this.orgList = orgList);
  }

  // ngOnInit(): void {
  //   this.orgService.getOrgList()
  //     .then(repoList => this.repoList = repoList.slice(1, 5));
  //   console.log(this.repoList)
  // }

  // gotoDetail(repo: Repo): void {
  //   let link = ['repoDetail', repo.namespace,repo.repository];
  //   this.router.navigate(link);
  // }
}