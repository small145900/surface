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
var UserSettingComponent = (function () {
    function UserSettingComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user = {
            username: ''
        };
        this.account = {};
        this.emailList = [];
        this.promptInfo = {
            isShow: false,
            text: ''
        };
        this.changeTitle('- userSetting');
    }
    UserSettingComponent.prototype.ngOnInit = function () {
        // if(!sessionStorage.getItem("username")){
        // 	this.router.navigate(['login']);
        // }
        this.getEmailList();
    };
    UserSettingComponent.prototype.getEmailList = function () {
        var _this = this;
        this.user.username = sessionStorage.getItem("username");
        this.userService.getEmailList(this.user)
            .then(function (res) {
            if (res.code === 200) {
                _this.emailList = res.data;
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.addEmail = function () {
        var _this = this;
        console.log(this.user);
        this.userService.addEmail(this.user)
            .then(function (res) {
            if (res.code === 200) {
                _this.getEmailList();
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.verifyEmail = function (info) {
        var _this = this;
        this.userService.verifyEmail(info, this.user)
            .then(function (res) {
            if (res.code === 200) {
                _this.isShowPrompt(true, 'send email success');
            }
            else {
                _this.isShowPrompt(true, res.data.message);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.delEmail = function (info) {
        var _this = this;
        this.userService.delEmail(info, this.user)
            .then(function (res) { if (res.code === 200) { } }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.changePassword = function () {
        console.log(this.user);
    };
    UserSettingComponent.prototype.saveAccountInfo = function () {
        console.log(this.account);
    };
    UserSettingComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    UserSettingComponent.prototype.isShowPrompt = function (boolean, text) {
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
    UserSettingComponent = __decorate([
        core_1.Component({
            selector: 'user-setting',
            templateUrl: '../templates/user/setting.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], UserSettingComponent);
    return UserSettingComponent;
}());
exports.UserSettingComponent = UserSettingComponent;
