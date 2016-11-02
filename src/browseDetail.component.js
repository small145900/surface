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
        this.repoDetail = {
            list: []
        };
        this.isShowType = false;
        this.chosedType = '';
        this.typeDetail = {};
        this.baseInfo = {};
        this.tags = [];
        this.collaborators = [];
        this.buildHistory = [];
        this.triggers = [];
        this.collaborator = {
            username: ''
        };
        // repoDetail(repoInfo){
        //   this.router.navigate(['repositories',repoInfo.repository])
        // }
        this.createStep = 1;
        this.changeTitle('- repoDetail');
    }
    BrowseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.repoInfo.repoName = params['repoName'];
            _this.getRepoDetail(_this.repoInfo.repoName);
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
    BrowseDetailComponent.prototype.getRepoDetail = function (repoName) {
        var _this = this;
        this.repoService.getRepoDetail(repoName)
            .then(function (res) {
            if (res.code === 200) {
                _this.repoDetail = res.data;
                _this.chosedType = res.data.list[0].type;
                _this.getTypeDetail(_this.chosedType);
                console.log(res.data);
            }
            else {
                console.log('get repo detail err', res);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    BrowseDetailComponent.prototype.getTypeDetail = function (chosedType) {
        this.repoDetail.list.map(function (item) {
            if (chosedType === item.type) {
                this.typeDetail = item;
                this.baseInfo = item.baseInfo;
                this.tags = item.tags;
                this.collaborators = item.collaborators;
                console.log(item, 222);
                return;
            }
        }.bind(this));
    };
    BrowseDetailComponent.prototype.isShowTypes = function () {
        this.isShowType = !this.isShowType;
    };
    BrowseDetailComponent.prototype.changeType = function (typeInfo) {
        this.isShowType = false;
        this.chosedType = typeInfo.type;
        this.getTypeDetail(this.chosedType);
    };
    BrowseDetailComponent.prototype.delCollaborator = function (item, index) {
        this.collaborators.splice(index, 1);
    };
    BrowseDetailComponent.prototype.addCollaborator = function () {
        if (this.collaborator.username) {
            var collaborator = {
                username: this.collaborator.username,
                access: 'collaborator'
            };
            this.collaborators.push(collaborator);
            this.collaborator.username = '';
        }
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
            templateUrl: '../templates/common/browseDetail.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, repo_service_1.RepoService])
    ], BrowseDetailComponent);
    return BrowseDetailComponent;
}());
exports.BrowseDetailComponent = BrowseDetailComponent;
