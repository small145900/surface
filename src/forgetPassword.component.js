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
var ForgetPwdComponent = (function () {
    function ForgetPwdComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isTips = {
            otherError: false
        };
        this.user = {
            email: ''
        };
        this.active = '';
        this.browseList = [];
        this.hover = '';
        this.changeTitle('- forgetpwd');
    }
    ForgetPwdComponent.prototype.ngOnInit = function () { };
    ForgetPwdComponent.prototype.changeTitle = function (val) {
        var title = (document.getElementsByTagName('title')[0].innerHTML) ? (document.getElementsByTagName('title')[0].innerHTML).split('-')[0] + val : val;
        this.userService.changeTitle(title);
    };
    ForgetPwdComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    ForgetPwdComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    ForgetPwdComponent.prototype.sendEmail = function () {
        var _this = this;
        console.log(this.user);
        var user = this.user;
        if (this.user.email && this.user.email.indexOf('@') !== -1) {
            this.userService.sendEmail(this.user)
                .then(function (res) {
                if (res.code === 200) {
                    _this.router.navigate(['repositories']);
                }
                else if (res.code === 400) {
                    _this.tips('otherError', true);
                    setTimeout(function () {
                        this.tips('otherError', false);
                    }.bind(_this), 3000);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!user.email) {
            alert('please input correct email');
        }
        else if (!(user.email && this.user.email.indexOf('@') !== -1)) {
            alert('please input correct email');
        }
        // this.router.navigate(['repositories']);
    };
    ForgetPwdComponent.prototype.tips = function (name, val) {
        this.isTips[name] = val;
    };
    ForgetPwdComponent = __decorate([
        core_1.Component({
            selector: 'forget-password',
            templateUrl: '../templates/common/forgetPassword.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ForgetPwdComponent);
    return ForgetPwdComponent;
}());
exports.ForgetPwdComponent = ForgetPwdComponent;
