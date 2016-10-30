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
var common_1 = require('@angular/common');
var repo_service_1 = require('./repo.service');
var RepoDetailComponent = (function () {
    function RepoDetailComponent(location, route, router, repoService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.repoService = repoService;
        this.repoInfo = {
            repoName: ''
        };
        this.createStep = 1;
        this.changeTitle('- repoDetail');
    }
    RepoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.repoInfo.repoName = params['repoName'];
            console.log(params['repoName']);
        });
    };
    RepoDetailComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.repoService.changeTitle(title);
    };
    // goBack(): void {
    //   this.location.back();
    // }
    RepoDetailComponent.prototype.edit = function () {
        console.log(this);
    };
    RepoDetailComponent.prototype.repoDetail = function (repoInfo) {
        this.router.navigate(['repositories', repoInfo.repository]);
    };
    RepoDetailComponent.prototype.createBuildNext = function () {
        if (this.createStep == 3) {
            this.createStep = 1;
        }
        else {
            this.createStep++;
        }
    };
    RepoDetailComponent = __decorate([
        core_1.Component({
            selector: 'repo-detail',
            templateUrl: '../templates/repository/repoDetail.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, router_1.Router, repo_service_1.RepoService])
    ], RepoDetailComponent);
    return RepoDetailComponent;
}());
exports.RepoDetailComponent = RepoDetailComponent;
