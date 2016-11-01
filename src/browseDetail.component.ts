import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { UserService } from './user.service';
import { RepoService } from './repo.service';

@Component({
  selector: 'browse-detail',
  templateUrl: '../templates/common/browseDetail.html'
})
export class BrowseDetailComponent {
	constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private repoService: RepoService ){
    this.changeTitle('- detail')
  }

  repoInfo = {
    repoName: ''
  };
  type = 1;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.repoInfo.repoName = params['repoName']
      console.log(params['repoName'])
    });
  }

  changeTitle(val) {
    var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
    this.userService.changeTitle(title)
  }

  // goBack(): void {
  //   this.location.back();
  // }

  edit():void{
    console.log(this);
  }

  repoDetail(repoInfo){
    this.router.navigate(['repositories',repoInfo.repository])
  }


  createStep = 1;

  createBuildNext():void{
    if(this.createStep == 3){
      this.createStep = 1;
    }else{
      this.createStep++;
    }
  }

  changeType(val){
    this.type = val
  }
}