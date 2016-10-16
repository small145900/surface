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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.doLogin = function (info) {
        var params = JSON.stringify(info);
        return this.http.post('/web/v1/user/signin', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.getEmailList = function (info) {
        var params = JSON.stringify(info);
        return this.http.get('json/emailList.json')
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.addEmail = function (info) {
        var params = JSON.stringify(info);
        return this.http.put('/web/v1/user/' + info.username + '/email', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.sendEmail = function (info, user) {
        var params = JSON.stringify(info);
        return this.http.put('/web/v1/user/' + user.username + '/email/' + info.email + '/send', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.delEmail = function (info, user) {
        var params = JSON.stringify(info);
        return this.http.put('/web/v1/user/' + user.username + '/email/' + info.email, params, { headers: this.headers })
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.loginOut = function (user) {
        var params = JSON.stringify(user);
        return this.http.put('/web/v1/user/' + user.username + '/signout', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData)
            .catch(this.handleError);
    };
    UserService.prototype.dealData = function (res) {
        return res.json() || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
