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
var user_service_1 = require('./user.service');
var repo_service_1 = require('./repo.service');
var BrowseDetailComponent = (function () {
    function BrowseDetailComponent(location, route, router, userService, repoService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.repoService = repoService;
        this.repoInfo = {
            repoName: ''
        };
        this.createStep = 1;
        this.changeTitle('- detail');
    }
    BrowseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.repoInfo.repoName = params['repoName'];
            console.log(params['repoName']);
        });
    };
    BrowseDetailComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    // goBack(): void {
    //   this.location.back();
    // }
    BrowseDetailComponent.prototype.edit = function () {
        console.log(this);
    };
    BrowseDetailComponent.prototype.repoDetail = function (repoInfo) {
        this.router.navigate(['repositories', repoInfo.repository]);
    };
    BrowseDetailComponent.prototype.createBuildNext = function () {
        if (this.createStep == 3) {
            this.createStep = 1;
        }
        else {
            this.createStep++;
        }
    };
    BrowseDetailComponent = __decorate([
        core_1.Component({
            selector: 'browse-detail',
            templateUrl: '../templates/repository/repoDetail.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, repo_service_1.RepoService])
    ], BrowseDetailComponent);
    return BrowseDetailComponent;
}());
exports.BrowseDetailComponent = BrowseDetailComponent;
