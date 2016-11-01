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
var user_service_1 = require('./user.service');
var OrgEditComponent = (function () {
    function OrgEditComponent(router, route, userService, orgService, repoService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.orgService = orgService;
        this.repoService = repoService;
        this.isEdit = false;
        this.step = 1;
        this.repo = {
            username: '',
            id: '',
            repository: '',
            short: '',
            description: '',
            privilege: "public"
        };
        this.org = {
            namespace: '',
            'full-name': '',
            description: '',
            location: '',
            gravatar: '',
            url: '',
            email: ''
        };
        this.team = {
            name: "",
            title: "",
            description: "",
            orgName: ""
        };
        this.teamList = [];
        this.currentTeam = '';
        this.chosedTeam = '';
        this.isShowTeam = false;
        this.member = {
            name: '',
        };
        this.memberList = [];
        this.promptInfo = {
            isShow: false,
            text: ''
        };
        this.changeTitle('- orgEdit');
    }
    OrgEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(!sessionStorage.getItem("username")){
        // 	this.router.navigate(['login']);
        // }
        this.route.params.forEach(function (params) {
            _this.editOrg();
        });
    };
    OrgEditComponent.prototype.editOrg = function () {
        this.route.params.forEach(function (params) {
            if (params['orgName'] !== '-1') {
            }
        });
    };
    OrgEditComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    OrgEditComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    OrgEditComponent.prototype.saveOrgInfo = function (step) {
        var _this = this;
        console.log(this.org);
        var org = this.org;
        if (org.namespace && org['full-name'] && org.description) {
            this.orgService.orgCreate(this.org)
                .then(function (res) {
                if (res.code === 201) {
                    _this.changeStep(step);
                }
                else {
                    _this.isShowPrompt(true, res.data.message);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!org.namespace) {
            this.isShowPrompt(true, 'please input namespace');
        }
        else if (!org['full-name']) {
            this.isShowPrompt(true, 'please input full name');
        }
        else if (!org.description) {
            this.isShowPrompt(true, 'please input description');
        }
        // else if(!org.location){
        // 	this.isShowPrompt(true,'please input location')
        // }else if(!org.gravatar){
        // 	this.isShowPrompt(true,'please input gravatar')
        // }else if(org.gravatar&&org.gravatar.indexOf('@')===-1){
        // 	this.isShowPrompt(true,'gravatar is invalid')
        // }else if(!org.url){
        // 	this.isShowPrompt(true,'please input url')
        // }else if(!org.email){
        // 	this.isShowPrompt(true,'please input email')
        // }
    };
    OrgEditComponent.prototype.saveTeamInfo = function () {
        var _this = this;
        var team = this.team;
        if (team.name && team.title && team.description) {
            team.orgName = this.org.namespace;
            this.orgService.teamCreate(this.org)
                .then(function (res) {
                if (res.code === 201) {
                    _this.isShowPrompt(true, 'create team success');
                    _this.getTeamList();
                }
                else {
                    _this.isShowPrompt(true, res.data.message);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!team.name) {
            this.isShowPrompt(true, 'please input name');
        }
        else if (!team.title) {
            this.isShowPrompt(true, 'please input title');
        }
        else if (!team.description) {
            this.isShowPrompt(true, 'please input description');
        }
    };
    OrgEditComponent.prototype.getTeamList = function () {
        var _this = this;
        this.orgService.getTeamList(this.org.namespace)
            .then(function (res) {
            if (res.code === 200) {
                _this.teamList = res.data;
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    OrgEditComponent.prototype.getMemberList = function (team) {
        var _this = this;
        this.currentTeam = team.name;
        this.orgService.getMemberList(team.name, this.org.namespace)
            .then(function (res) {
            if (res.code === 200) {
                _this.memberList = res.data;
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    OrgEditComponent.prototype.addMember = function () {
        var _this = this;
        var member = this.member;
        if (member.name && this.currentTeam) {
            this.orgService.addMember(member.name, this.currentTeam, this.org.namespace)
                .then(function (res) {
                if (res.code === 200) {
                    _this.memberList = res.data;
                }
                else {
                    _this.isShowPrompt(true, res.data.message);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!member.name) {
            this.isShowPrompt(true, 'no member name');
        }
        else if (!this.currentTeam) {
            this.isShowPrompt(true, 'please choose team');
        }
    };
    OrgEditComponent.prototype.delMember = function (member) {
        var _this = this;
        this.orgService.delMember(member.name, this.currentTeam, this.org.namespace)
            .then(function (res) {
            if (res.code === 200) {
                _this.memberList = res.data;
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    OrgEditComponent.prototype.showOptions = function () {
        this.isShowTeam = !this.isShowTeam;
    };
    OrgEditComponent.prototype.choseTeam = function (team) {
        this.chosedTeam = team.name;
        this.isShowTeam = false;
    };
    OrgEditComponent.prototype.saveRepoInfo = function () {
        var _this = this;
        var repo = this.repo;
        if (this.org.namespace && repo.repository && repo.short && repo.privilege) {
            repo.username = this.org.namespace;
            this.repoService.repoCreate(repo)
                .then(function (res) {
                if (res.code === 201) {
                    _this.router.navigate(['organizations']);
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
    OrgEditComponent.prototype.isShowPrompt = function (boolean, text) {
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
    OrgEditComponent = __decorate([
        core_1.Component({
            selector: 'org-edit',
            templateUrl: '../templates/organization/orgEdit.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService, org_service_1.OrgService, repo_service_1.RepoService])
    ], OrgEditComponent);
    return OrgEditComponent;
}());
exports.OrgEditComponent = OrgEditComponent;
