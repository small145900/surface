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
var OrgService = (function () {
    function OrgService(http, title) {
        this.http = http;
        this.title = title;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // getOrgList(): Promise<Org[]> {
    //   var arr = [{ name: "small",
    //                 title: "small",
    //                 bio: "desc",
    //                 id: 50,
    //                 gravatar: "img/logo.png",
    //                 teams: 30,
    //                 repositories: 100
    //               }]
    //   return Promise.resolve(arr);
    // }
    OrgService.prototype.getOrgList = function () {
        return this.http.get('json/orgList.json')
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.orgCreate = function (info) {
        var params = JSON.stringify(info);
        return this.http.post('/web/v1/orgs', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.teamCreate = function (info) {
        var params = JSON.stringify(info);
        return this.http.post('/web/v1/orgs/' + info.orgName + '/team', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.getTeamList = function (orgName) {
        return this.http.get('/web/v1/orgs/' + orgName + '/teams?organization=' + orgName)
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.getMemberList = function (teamName, orgName) {
        return this.http.get('/web/v1/orgs/' + orgName + '/' + teamName + '/membership/list')
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.addMember = function (name, teamName, orgName) {
        var params = JSON.stringify({ username: name });
        return this.http.put('/web/v1/orgs/' + orgName + '/' + teamName + '/membership', params, { headers: this.headers })
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.delMember = function (name, teamName, orgName) {
        return this.http.delete('/web/v1/orgs/' + orgName + '/' + teamName + '/membership/' + name, { headers: this.headers })
            .toPromise()
            .then(this.dealData, this.dealError)
            .catch(this.handleError);
    };
    OrgService.prototype.dealData = function (res) {
        var object = {
            code: res.status,
            data: res.json()
        };
        return object || {};
    };
    OrgService.prototype.dealError = function (err) {
        var object = {
            code: err.status,
            data: err.json()
        };
        return object || {};
    };
    OrgService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    OrgService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.Title])
    ], OrgService);
    return OrgService;
}());
exports.OrgService = OrgService;
