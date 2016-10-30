import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

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
    private route: ActivatedRoute,
    private orgService: OrgService){
    this.changeTitle('- orgList')
	}

  ngOnInit(): void {
    // if(!sessionStorage.getItem("username")){
    //   this.router.navigate(['login']);
    // }
    this.getOrgList()
  }

  getOrgList(){
    this.orgService.getOrgList()
      .then(res => {
        if(res.code === 200){
          this.orgList = res.data
        }else{
          console.log('get org list err',res)
        }
      },error => this.errorMsg = <any>error);
  }

  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.orgService.changeTitle(title)
  }

  // gotoDetail(repo: Repo): void {
  //   let link = ['repoDetail', repo.namespace,repo.repository];
  //   this.router.navigate(link);
  // }
  orgCreate(path){
    this.router.navigate([path]);
  }

  editOrg(org){
    this.router.navigate(['orgEdit',org.name]);
  }

  seeAllRepo(orgInfo) {
    this.router.navigate(['organizations',orgInfo.name]
      // {queryParams: orgInfo}
    )
  }
}