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
var repo_service_1 = require('./repo.service');
var RepositoriesComponent = (function () {
    function RepositoriesComponent(router, route, repoService) {
        this.router = router;
        this.route = route;
        this.repoService = repoService;
        this.repoList = [];
        this.orgInfo = {
            orgName: ''
        };
    }
    RepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.orgInfo.orgName = params['orgName'];
            console.log(_this.orgInfo);
        });
        this.repoService.getRepoList(this.orgInfo)
            .then(function (repoList) { return _this.repoList = repoList; }, function (error) { return _this.errorMsg = error; });
    };
    RepositoriesComponent.prototype.repoCreate = function (path) {
        this.router.navigate([path]);
    };
    RepositoriesComponent.prototype.repoDetail = function (repoInfo) {
        this.router.navigate(['repositories', repoInfo.repository]);
    };
    RepositoriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repositories',
            templateUrl: '../templates/repository/repositories.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, repo_service_1.RepoService])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());
exports.RepositoriesComponent = RepositoriesComponent;
