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
var OrgService = (function () {
    function OrgService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // getOrgList(): Promise<Org[]> {
    //   var arr = [
    //               { name: "small",
    //                 title: "small",
    //                 bio: "desc",
    //                 id: 50,
    //                 gravatar: "img/logo.png",
    //                 teams: 30,
    //                 repositories: 100
    //               },    
    //               { name: "small",
    //                 title: "small",
    //                 bio: "desc",
    //                 id: 60,
    //                 gravatar: "img/logo.png",
    //                 teams: 30,
    //                 repositories: 100
    //               },
    //               { name: "small",
    //                 title: "small",
    //                 bio: "desc",
    //                 id: 70,
    //                 gravatar: "img/logo.png",
    //                 teams: 30,
    //                 repositories: 100
    //               }
    //             ]
    //   return Promise.resolve(arr);
    // }
    OrgService.prototype.getOrgList = function () {
        return this.http.get('json/orgList.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { console.log(error); });
    };
    OrgService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrgService);
    return OrgService;
}());
exports.OrgService = OrgService;
