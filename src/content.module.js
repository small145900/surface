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
var content_component_1 = require('./content.component');
var nav_component_1 = require('./nav.component');
var repoList_component_1 = require('./repoList.component');
var repositories_component_1 = require('./repositories.component');
var repoCreate_component_1 = require('./repoCreate.component');
var repoDetail_component_1 = require('./repoDetail.component');
var orgList_component_1 = require('./orgList.component');
var orgCreate_component_1 = require('./orgCreate.component');
var userSetting_component_1 = require('./userSetting.component');
var org_service_1 = require('./org.service');
var repo_service_1 = require('./repo.service');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var content_routing_1 = require('./content.routing');
var ContentModule = (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                content_routing_1.routing
            ],
            declarations: [
                content_component_1.ContentComponent,
                nav_component_1.NavComponent,
                repoList_component_1.RepoListComponent,
                repositories_component_1.RepositoriesComponent,
                repoCreate_component_1.RepoCreateComponent,
                repoDetail_component_1.RepoDetailComponent,
                orgList_component_1.OrgListComponent,
                orgCreate_component_1.OrgCreateComponent,
                userSetting_component_1.UserSettingComponent
            ],
            providers: [
                org_service_1.OrgService,
                repo_service_1.RepoService
            ],
            bootstrap: [content_component_1.ContentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
