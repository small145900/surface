import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Org } from './org';
import { Repo } from './repo';
import { OrgRepo } from './orgRepo';
import { UserService } from './user.service';
import { RepoService } from './repo.service';

@Component({
	moduleId: module.id,
  selector: 'user-repo',
  templateUrl: '../templates/common/user.repo.html'
})

export class UserRepoComponent implements OnInit {
  errorMsg: string;
  repoList = [];
	// orgList: Org[] = [];
  // repoList: Repo[] = [];
  // orgRepo: OrgRepo[] = [];
  user = {
    username: '',
    img: ''
  };
	orgRepo = [];
  promptInfo = {
    isShow: false,
    text: ''
  }

	constructor(
		private router: Router,
    private route: ActivatedRoute,
		private userService: UserService,
    private repoService: RepoService){
    this.changeTitle('- user')
	}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.user.username = params['username']
    });
		this.getRepoList()         
  }

  getRepoList(){
    this.repoService.getRepoList(this.user)
      .then(response => {
        if(response.code === 200){
          this.repoList = response.data; 
        }else{
          console.log('get repo list error',response)
        }
      },error => this.errorMsg = <any>error)
  }
  
  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.userService.changeTitle(title)
  }

  changeNav(val){
    this.router.navigate([val]);
  }

  repoDetail(repoInfo){
    this.router.navigate(['detail',repoInfo.repository])
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