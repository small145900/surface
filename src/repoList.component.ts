import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Org } from './org';
import { Repo } from './repo';
import { OrgService } from './org.service';
import { RepoService } from './repo.service';

@Component({
	moduleId: module.id,
  selector: 'repo-list',
  templateUrl: '../templates/repository/repoList.html'
})

export class RepoListComponent {
	orgList: Org[] = [];
	repoList: Repo[] = [];

	constructor(
		private router: Router,
		private orgService: OrgService,
    private repoService: RepoService){
	}

  ngOnInit(): void {
  	this.orgService.getOrgList()
      .then(orgList => this.orgList = orgList)
      .then(() => {
      	this.orgList.map((org) => {
      		this.repoService.getRepoList(org)
      			.then(repoList => {org.children = repoList.slice(0,4); this.repoList.push(org)})
      	})
      })        
  }
}