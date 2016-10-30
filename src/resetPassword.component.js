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
var ResetPwdComponent = (function () {
    function ResetPwdComponent(router, userService) {
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
        this.changeTitle('- resetpwd');
    }
    ResetPwdComponent.prototype.ngOnInit = function () { };
    ResetPwdComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    ResetPwdComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    ResetPwdComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    ResetPwdComponent.prototype.resetPwd = function () {
        var _this = this;
        console.log(this.user);
        this.userService.resetPwd(this.user)
            .then(function (res) { if (res.code === 200) {
            _this.router.navigate(['repositories']);
        } }, function (error) { return _this.errorMsg = error; });
        // this.router.navigate(['repositories']);
    };
    ResetPwdComponent = __decorate([
        core_1.Component({
            selector: 'reset-password',
            templateUrl: '../templates/common/resetPassword.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ResetPwdComponent);
    return ResetPwdComponent;
}());
exports.ResetPwdComponent = ResetPwdComponent;
