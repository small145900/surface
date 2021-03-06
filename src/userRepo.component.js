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
var user_service_1 = require('./user.service');
var repo_service_1 = require('./repo.service');
var UserRepoComponent = (function () {
    function UserRepoComponent(router, route, userService, repoService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.repoService = repoService;
        this.repoList = [];
        // orgList: Org[] = [];
        // repoList: Repo[] = [];
        // orgRepo: OrgRepo[] = [];
        this.user = {
            username: '',
            img: ''
        };
        this.orgRepo = [];
        this.promptInfo = {
            isShow: false,
            text: ''
        };
        this.changeTitle('- user');
    }
    UserRepoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.user.username = params['username'];
        });
        this.getRepoList();
    };
    UserRepoComponent.prototype.getRepoList = function () {
        var _this = this;
        this.repoService.getRepoList(this.user)
            .then(function (response) {
            if (response.code === 200) {
                _this.repoList = response.data;
            }
            else {
                console.log('get repo list error', response);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    UserRepoComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    UserRepoComponent.prototype.changeNav = function (val) {
        this.router.navigate([val]);
    };
    UserRepoComponent.prototype.repoDetail = function (repoInfo) {
        this.router.navigate(['detail', repoInfo.repository]);
    };
    UserRepoComponent.prototype.isShowPrompt = function (boolean, text) {
        this.promptInfo = {
            isShow: boolean,
            text: text
        };
        if (boolean) {
            setTimeout(function () {
                this.isShowPrompt(false, '');
            }.bind(this), 3000);
        }
    };
    UserRepoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-repo',
            templateUrl: '../templates/common/user.repo.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService, repo_service_1.RepoService])
    ], UserRepoComponent);
    return UserRepoComponent;
}());
exports.UserRepoComponent = UserRepoComponent;
