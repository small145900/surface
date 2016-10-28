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
var OrgCreateComponent = (function () {
    function OrgCreateComponent(router, orgService) {
        this.router = router;
        this.orgService = orgService;
        this.step = 1;
        this.repo = {};
        this.org = {
            namespace: '',
            'full-name': '',
            description: '',
            location: '',
            gravatar: '',
            url: '',
            email: ''
        };
        this.team = {};
        this.promptInfo = {
            isShow: false,
            text: ''
        };
    }
    OrgCreateComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.getItem("username")) {
            this.router.navigate(['login']);
        }
    };
    OrgCreateComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    OrgCreateComponent.prototype.saveOrgInfo = function (step) {
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
    OrgCreateComponent.prototype.saveTeamInfo = function () {
        console.log(this.team);
    };
    OrgCreateComponent.prototype.isShowPrompt = function (boolean, text) {
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
    OrgCreateComponent = __decorate([
        core_1.Component({
            selector: 'org-create',
            templateUrl: '../templates/organization/orgCreate.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, org_service_1.OrgService])
    ], OrgCreateComponent);
    return OrgCreateComponent;
}());
exports.OrgCreateComponent = OrgCreateComponent;
