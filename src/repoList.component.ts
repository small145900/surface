import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Org } from './org';
import { Repo } from './repo';
import { OrgRepo } from './orgRepo';
import { OrgService } from './org.service';
import { RepoService } from './repo.service';
import { UserService } from './user.service';


@Component({
	moduleId: module.id,
  selector: 'repo-list',
  templateUrl: '../templates/repository/repoList.html'
})

export class RepoListComponent implements OnInit {
  errorMsg: string;
  orgList = [];
	// orgList: Org[] = [];
  // repoList: Repo[] = [];
  // orgRepo: OrgRepo[] = [];
	orgRepo = [];
  promptInfo = {
    isShow: false,
    text: ''
  }

	constructor(
		private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
		private orgService: OrgService,
    private repoService: RepoService){
    this.changeTitle('- repositories')
	}

  ngOnInit(): void {
  	this.orgService.getOrgList()
      .then(res => {
        if(res.code === 200){
          this.orgList = res.data
        }else{
          console.log('get org list error',res)
        }
      })
      .then(() => {
      	this.orgList.map((dom) => {
      		this.repoService.getRepoList(dom)
      			.then(response => {
              if(response.code === 200){
                dom.children = response.data.slice(0,4); 
                this.orgRepo.push(dom)
              }else{
                console.log('get repo list error',response,'orgInfo',dom)
              }
            },error => this.errorMsg = <any>error)
      	})
      })        
  }

  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.userService.changeTitle(title)
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

  isShowPrompt(boolean,text){
    this.promptInfo = {
      isShow: boolean,
      text: text
    }
    if(boolean){
      setTimeout(function(){
        this.isShowPrompt(false,'')
      }.bind(this),3000)
    }
  }
}