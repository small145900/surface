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
var content_module_1 = require('./content.module');
var app_component_1 = require('./app.component');
// import { NavComponent }  from './nav.component';
var login_component_1 = require('./login.component');
// import { RepoListComponent }  from './repoList.component';
// import { RepoCreateComponent }  from './repoCreate.component';
// import { RepoDetailComponent } from './repoDetail.component';
// import { OrgListComponent }      from './orgList.component';
// import { OrgCreateComponent }      from './orgCreate.component';
// import { UserSettingComponent }      from './userSetting.component';
// import { OrgService }      from './org.service';
// import { RepoService }      from './repo.service';
var user_service_1 = require('./user.service');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                content_module_1.ContentModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                // OrgService,
                // RepoService
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
