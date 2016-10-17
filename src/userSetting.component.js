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
var user_service_1 = require('./user.service');
var UserSettingComponent = (function () {
    function UserSettingComponent(userService) {
        this.userService = userService;
        this.user = {
            username: 'test'
        };
        this.emailList = [];
    }
    UserSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getEmailList(this.user)
            .then(function (res) { _this.emailList = res; console.log(res); }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.addEmail = function () {
        var _this = this;
        console.log(this.user);
        this.userService.addEmail(this.user)
            .then(function (res) { if (res.code === 200) { } }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.verifyEmail = function (info) {
        var _this = this;
        this.userService.verifyEmail(info, this.user)
            .then(function (res) { if (res.code === 200) { } }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent.prototype.delEmail = function (info) {
        var _this = this;
        this.userService.delEmail(info, this.user)
            .then(function (res) { if (res.code === 200) { } }, function (error) { return _this.errorMsg = error; });
    };
    UserSettingComponent = __decorate([
        core_1.Component({
            selector: 'user-setting',
            templateUrl: '../templates/user/setting.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserSettingComponent);
    return UserSettingComponent;
}());
exports.UserSettingComponent = UserSettingComponent;
