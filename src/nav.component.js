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
var NavComponent = (function () {
    function NavComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: 'test'
        };
        this.active = 'login';
    }
    NavComponent.prototype.changeNav = function (nav) {
        this.active = nav;
    };
    NavComponent.prototype.linkComp = function (path, nav) {
        this.changeNav(nav);
        this.router.navigate([path]);
        // this.router.navigate(["repoDetail",5]);
    };
    NavComponent.prototype.loginOut = function () {
        var _this = this;
        this.userService.loginOut(this.user)
            .then(function (res) {
            if (res.code === 200) {
                sessionStorage.setItem("username", '');
                _this.router.navigate(['']);
            }
        }, function (error) { return _this.errorMsg = error; });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: '../templates/common/nav.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
