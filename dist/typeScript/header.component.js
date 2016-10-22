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
var HeaderComponent = (function () {
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: '',
            email: '',
            password: '',
            're-password': ''
        };
        this.active = '';
        this.browseList = [];
        this.hover = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getBrowseList()
            .then(function (browseList) { return _this.browseList = browseList; }, function (error) { return _this.errorMsg = error; });
    };
    HeaderComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    HeaderComponent.prototype.changeNav = function (val) {
        this.user = {
            username: '',
            email: '',
            password: '',
            're-password': ''
        };
        this.active = val;
        if (val == "contact") {
        }
    };
    HeaderComponent.prototype.login = function () {
        console.log(this.user);
        // this.userService.doLogin(this.user)
        //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
        //           error => this.errorMsg = <any>error);
        this.router.navigate(['repositories']);
    };
    HeaderComponent.prototype.signUp = function () {
        console.log(this.user);
        // this.userService.signUp(this.user)
        //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
        //           error => this.errorMsg = <any>error);
        this.router.navigate(['repositories']);
    };
    HeaderComponent.prototype.sendEmail = function () {
        console.log(this.user);
        // this.userService.sendEmail(this.user)
        //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
        //           error => this.errorMsg = <any>error);
        this.router.navigate(['repositories']);
    };
    HeaderComponent.prototype.resetPwd = function () {
        console.log(this.user);
        // this.userService.resetPwd(this.user)
        //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
        //           error => this.errorMsg = <any>error);
        this.router.navigate(['repositories']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: '../templates/common/header.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
