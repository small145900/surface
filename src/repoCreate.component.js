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
var http_1 = require('@angular/http');
var repo_service_1 = require('./repo.service');
var org_service_1 = require('./org.service');
require('rxjs/add/operator/toPromise');
var RepoCreateComponent = (function () {
    function RepoCreateComponent(router, http, repoService, orgService) {
        this.router = router;
        this.http = http;
        this.repoService = repoService;
        this.orgService = orgService;
        this.step = 0;
        this.isShowOrg = false;
        this.repo = {
            username: '',
            id: '',
            repository: '',
            short: '',
            description: '',
            privilege: "public"
        };
        this.orgList = [];
        this.promptInfo = {
            isShow: false,
            text: ''
        };
        // this.isShowPrompt(true,999)
        this.changeTitle('- repoCreate');
    }
    RepoCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = 'sessionStorage.getItem("username")';
        if (username) {
            var orgList = this.orgList;
            this.orgService.getOrgList()
                .then(function (res) {
                if (res.code === 200) {
                    res.data.map(function (r) {
                        if (r.role === 'admin' || r.role === 'write') {
                            orgList.push(r);
                        }
                    });
                    orgList.push({ name: username });
                    if (orgList.length === 1) {
                        _this.repo.username = orgList[0].name;
                    }
                }
                else {
                    console.log('get org list err', res);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else {
            this.router.navigate(['login']);
        }
    };
    RepoCreateComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.repoService.changeTitle(title);
    };
    RepoCreateComponent.prototype.showOptions = function () {
        this.isShowOrg = !this.isShowOrg;
        this.changeStep(1);
    };
    RepoCreateComponent.prototype.choseOrg = function (orgInfo) {
        console.log(orgInfo);
        this.repo.username = orgInfo.name;
        this.repo.id = orgInfo.id;
        this.isShowOrg = false;
    };
    RepoCreateComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    RepoCreateComponent.prototype.saveRepoInfo = function (step) {
        var _this = this;
        console.log(this.repo);
        var repo = this.repo;
        var CanCreateRepo = repo.username;
        if (repo.username && repo.repository && repo.short && repo.privilege) {
            this.repoService.repoCreate(this.repo)
                .then(function (res) {
                if (res.code === 201) {
                    _this.router.navigate(['repositories']);
                }
                else {
                    _this.isShowPrompt(true, res.data.message);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!repo.username) {
            this.isShowPrompt(true, 'please choose namespace');
        }
        else if (!repo.repository) {
            this.isShowPrompt(true, 'please input repository name');
        }
        else if (!repo.short) {
            this.isShowPrompt(true, 'please input short description');
        }
    };
    RepoCreateComponent.prototype.isShowPrompt = function (boolean, text) {
        this.promptInfo = {
            isShow: boolean,
            text: text
        };
        if (boolean) {
            setTimeout(function () {
                this.isShowPrompt(false, '');
            }.bind(this), 2000);
        }
    };
    RepoCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repo-create',
            templateUrl: '../templates/repository/repoCreate.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, repo_service_1.RepoService, org_service_1.OrgService])
    ], RepoCreateComponent);
    return RepoCreateComponent;
}());
exports.RepoCreateComponent = RepoCreateComponent;
