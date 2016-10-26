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
var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isTips = {
            username: false,
            email: false,
            isEmailRight: false,
            password: false,
            pwdError: false,
            otherError: false
        };
        this.user = {
            username: '',
            email: '',
            password: ''
        };
        this.active = '';
        this.browseList = [];
        this.hover = '';
        this.userService.changeTitle('register');
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.activeHover = function (index) {
        this.hover = index;
    };
    RegisterComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        console.log(this.user);
        var user = this.user;
        var pwdReg = /(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Z]{8,}/;
        console.log(/(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Z]{8,}/.test(user.password));
        if (user.username && user.password && pwdReg.test(user.password) && user.email) {
            this.userService.signUp(this.user)
                .then(function (res) {
                if (res.code === 201) {
                    _this.router.navigate(['repositories']);
                    sessionStorage.setItem("username", user.username);
                }
                else {
                    _this.tips('otherError', true);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!user.username) {
            this.tips('username', true);
        }
        else if (!user.password) {
            this.tips('password', true);
        }
        else if (!(user.password && pwdReg.test(user.password))) {
            this.tips('pwdError', true);
        }
        else if (!user.email) {
            this.tips('email', true);
        }
        else if (!(user.email && user.email.indexOf('@') !== -1)) {
            this.tips('isEmailRight', true);
        }
        // this.router.navigate(['repositories']);
    };
    RegisterComponent.prototype.tips = function (name, val) {
        this.isTips[name] = val;
        if (val) {
            setTimeout(function () {
                this.tips(name, false);
            }.bind(this), 4000);
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: '../templates/common/register.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
