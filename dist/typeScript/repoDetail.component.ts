import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'repo-detail',
  templateUrl: '../templates/repository/repoDetail.html'
})
export class RepoDetailComponent {
	constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router){
  }

  repoInfo = {
    repoName: ''
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.repoInfo.repoName = params['repoName']
      console.log(params['repoName'])
    });
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

}