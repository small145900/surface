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
var http_1 = require('@angular/http');
var repo_service_1 = require('./repo.service');
var org_service_1 = require('./org.service');
require('rxjs/add/operator/toPromise');
var RepoCreateComponent = (function () {
    function RepoCreateComponent(http, repoService, orgService) {
        this.http = http;
        this.repoService = repoService;
        this.orgService = orgService;
        this.step = 0;
        this.isShowOrg = false;
        this.chosedOrgName = '';
        this.repo = {};
        this.orgList = [];
    }
    RepoCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(sessionStorage.getItem("username")){
        this.orgService.getOrgList()
            .then(function (res) {
            // if(res.code === 200){
            //   this.orgList = res.data
            // }else{
            //   console.log('get org list err',res)
            // }
        }, function (error) { return _this.errorMsg = error; });
        // }
    };
    RepoCreateComponent.prototype.choseOrg = function (orgInfo) {
        this.chosedOrgName = orgInfo.name;
        this.isShowOrg = false;
    };
    RepoCreateComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    RepoCreateComponent.prototype.saveRepoInfo = function (step) {
        var _this = this;
        console.log(this.repo);
        this.repoService.repoCreate(this.repo)
            .then(function (res) { }, function (error) { return _this.errorMsg = error; });
    };
    RepoCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repo-create',
            templateUrl: '../templates/repository/repoCreate.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, repo_service_1.RepoService, org_service_1.OrgService])
    ], RepoCreateComponent);
    return RepoCreateComponent;
}());
exports.RepoCreateComponent = RepoCreateComponent;
