"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var org_service_1 = require('./org.service');
var repo_service_1 = require('./repo.service');
var RepoListComponent = (function () {
    function RepoListComponent(router, route, orgService, repoService) {
        this.router = router;
        this.route = route;
        this.orgService = orgService;
        this.repoService = repoService;
        this.orgList = [];
        // orgList: Org[] = [];
        // repoList: Repo[] = [];
        // orgRepo: OrgRepo[] = [];
        this.orgRepo = [];
    }
    RepoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orgService.getOrgList()
            .then(function (res) {
            // if(res.code === 200){
            //   this.orgList = res.data
            // }else{
            //   console.log('get org list error',res)
            // }
        })
            .then(function () {
            _this.orgList.map(function (dom) {
                _this.repoService.getRepoList(dom)
                    .then(function (response) {
                    // if(response.code === 200){
                    //   dom.children = response.data.slice(0,4); 
                    //   this.orgRepo.push(dom)
                    // }else{
                    //   console.log('get repo list error',response,'orgInfo',dom)
                    // }
                }, function (error) { return _this.errorMsg = error; });
            });
        });
    };
    RepoListComponent.prototype.repoCreate = function (path) {
        this.router.navigate([path]);
    };
    RepoListComponent.prototype.seeAllRepo = function (orgInfo) {
        this.router.navigate(['organizations', orgInfo.name]);
    };
    RepoListComponent.prototype.repoDetail = function (repoInfo) {
        this.router.navigate(['repositories', repoInfo.repository]);
    };
    RepoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repo-list',
            templateUrl: '../templates/repository/repoList.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, org_service_1.OrgService, repo_service_1.RepoService])
    ], RepoListComponent);
    return RepoListComponent;
}());
exports.RepoListComponent = RepoListComponent;
