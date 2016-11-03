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
    this.changeTitle('- repoDetail')
  }

  errorMsg: string;

  repoInfo = {
    repoName: ''
  };

  repoDetail = {
    list: []
  };

  isShowType = false;

  chosedType = '';
  typeDetail = {};
  baseInfo = {};
  tags = [];
  collaborators = [];
  buildHistory = [];
  triggers = [];

  collaborator = {
    username: ''
  };

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.repoInfo.repoName = params['repoName']
      this.getRepoDetail(this.repoInfo.repoName)
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

  getRepoDetail(repoName) {
    this.repoService.getRepoDetail(repoName)
      .then(res => {
        if(res.code === 200){
          this.repoDetail = res.data
          this.chosedType = res.data.list[0].type
          this.getTypeDetail(this.chosedType)
          console.log(res.data)
        }else{
          console.log('get repo detail err',res)
        }
      },error => this.errorMsg = <any>error);
  }

  getTypeDetail(chosedType){
    this.repoDetail.list.map(function(item){
      if(chosedType === item.type){
        this.typeDetail = item
        this.baseInfo = item.baseInfo
        this.tags = item.tags
        this.collaborators = item.collaborators
        console.log(item,222)
        return 
      }
    }.bind(this))
  }

  isShowTypes(){
    this.isShowType = !this.isShowType;
  }

  changeType(typeInfo){
    this.isShowType = false;
    this.chosedType = typeInfo.type;
    this.getTypeDetail(this.chosedType)
  }

  delCollaborator(item,index){
    this.collaborators.splice(index,1)
  }

  addCollaborator(){
    if(this.collaborator.username){
      var collaborator = {
        username: this.collaborator.username,
        access: 'collaborator'
      }
      this.collaborators.push(collaborator)
      this.collaborator.username = ''
    }
  }
  // repoDetail(repoInfo){
  //   this.router.navigate(['repositories',repoInfo.repository])
  // }


  createStep = 1;

  createBuildNext():void{
    if(this.createStep == 3){
      this.createStep = 1;
    }else{
      this.createStep++;
    }
  }
}