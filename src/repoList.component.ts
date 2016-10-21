import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Org } from './org';
import { Repo } from './repo';
import { OrgRepo } from './orgRepo';
import { OrgService } from './org.service';
import { RepoService } from './repo.service';

@Component({
	moduleId: module.id,
  selector: 'repo-list',
  templateUrl: '../templates/repository/repoList.html'
})

export class RepoListComponent implements OnInit {
  errorMsg: string;
	orgList: Org[] = [];
  // repoList: Repo[] = [];
	orgRepo: OrgRepo[] = [];


	constructor(
		private router: Router,
    private route: ActivatedRoute,
		private orgService: OrgService,
    private repoService: RepoService){
	}

  ngOnInit(): void {
  	this.orgService.getOrgList()
      .then(orgList => this.orgList = orgList)
      .then(() => {
      	this.orgList.map((dom) => {
      		this.repoService.getRepoList(dom)
      			.then(repoList => {
              dom.children = repoList.slice(0,4); 
              this.orgRepo.push(dom)
            },error => this.errorMsg = <any>error)
      	})
      })        
  }

  repoCreate(path){
    this.router.navigate([path]);
  }

  seeAllRepo(orgInfo) {
    this.router.navigate(['organizations',orgInfo.name]
      // {queryParams: orgInfo}
    )
  }

  repoDetail(repoInfo){
    this.router.navigate(['repositories',repoInfo.repository])
  }
}