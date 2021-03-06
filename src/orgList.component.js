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
var user_service_1 = require('./user.service');
var OrgListComponent = (function () {
    function OrgListComponent(router, route, userService, orgService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.orgService = orgService;
        // orgList: Org[] = [];
        this.orgList = [];
        this.changeTitle('- orgList');
    }
    OrgListComponent.prototype.ngOnInit = function () {
        // if(!sessionStorage.getItem("username")){
        //   this.router.navigate(['login']);
        // }
        this.getOrgList();
    };
    OrgListComponent.prototype.getOrgList = function () {
        var _this = this;
        this.orgService.getOrgList()
            .then(function (res) {
            if (res.code === 200) {
                _this.orgList = res.data;
            }
            else {
                console.log('get org list err', res);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    OrgListComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    // gotoDetail(repo: Repo): void {
    //   let link = ['repoDetail', repo.namespace,repo.repository];
    //   this.router.navigate(link);
    // }
    OrgListComponent.prototype.orgCreate = function (path) {
        this.router.navigate([path]);
    };
    OrgListComponent.prototype.editOrg = function (org) {
        this.router.navigate(['orgEdit', org.name]);
    };
    OrgListComponent.prototype.seeAllRepo = function (orgInfo) {
        this.router.navigate(['organizations', orgInfo.name]);
    };
    OrgListComponent = __decorate([
        core_1.Component({
            selector: 'org-list',
            templateUrl: '../templates/organization/orgList.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService, org_service_1.OrgService])
    ], OrgListComponent);
    return OrgListComponent;
}());
exports.OrgListComponent = OrgListComponent;
