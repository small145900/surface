import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Repo } from './repo';
import { RepoService } from './repo.service';

@Component({
	moduleId: module.id,
  selector: 'repositories',
  templateUrl: '../templates/repository/repositories.html'
})

export class RepositoriesComponent implements OnInit {
  errorMsg: string;
  repoList = [];
  orgInfo = {
    orgName: ''
  }

	constructor(
		private router: Router,
    private route: ActivatedRoute,
    private repoService: RepoService){
    this.changeTitle('- repositories')
	}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.orgInfo.orgName = params['orgName'];
      console.log(this.orgInfo)
    });
  	this.repoService.getRepoList(this.orgInfo)
      .then(response => {
        if(response.code === 200){
          this.repoList = response.data 
        }else{
          console.log('get repo list error',response)
        }
      },error => this.errorMsg = <any>error)    
  }

  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.repoService.changeTitle(title)
  }

  repoCreate(path){
    this.router.navigate([path]);
  }

  repoDetail(repoInfo){
    this.router.navigate(['repositories',repoInfo.repository])
  }
}