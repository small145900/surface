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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var RepoService = (function () {
    function RepoService(http, title) {
        this.http = http;
        this.title = title;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RepoService.prototype.getRepoList = function (orgInfo) {
        return this.http.get('json/repoList.json')
            .toPromise()
            .then(this.dealData,this.dealError)
            .catch(this.handleError);
    };
    RepoService.prototype.repoCreate = function (info) {
        var params = JSON.stringify(info);
        return this.http.post('/web/v1/repository', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData,this.dealError)
            .catch(this.handleError);
    };
    RepoService.prototype.dealData = function (res) {
        var object = {
            code: res.status,
            data: res.json()
        };
        return object || {};
    };
    RepoService.prototype.dealError = function (err) {
        var object = {
          code: err.status,
          data: err.json()
        }
        console.log(err)
        return object || {}
    };
    RepoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    RepoService.prototype.changeTitle = function (val) {
        this.title.setTitle(val);
    };
    RepoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.Title])
    ], RepoService);
    return RepoService;
}());
exports.RepoService = RepoService;
