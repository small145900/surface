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
var ContactComponent = (function () {
    function ContactComponent(router, userService) {
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
    ContactComponent.prototype.ngOnInit = function () {
        // console.log($('.content')[0].offsetTop)
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        // console.log($('.content').offset().top,111)
    };
    ContactComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    ContactComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: '../templates/common/contact.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
