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
// import { PromptModule }  from './prompt.module';
var app_component_1 = require('./app.component');
// import { HeaderComponent }  from './header.component';
// import { FooterComponent }  from './footer.component';
var index_component_1 = require('./index.component');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var forgetPassword_component_1 = require('./forgetPassword.component');
var resetPassword_component_1 = require('./resetPassword.component');
var browse_component_1 = require('./browse.component');
var brochur_component_1 = require('./brochur.component');
var contact_component_1 = require('./contact.component');
// import { PromptComponent }  from './prompt.component';
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
                // PromptModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forgetPassword_component_1.ForgetPwdComponent,
                resetPassword_component_1.ResetPwdComponent,
                browse_component_1.BrowseComponent,
                brochur_component_1.BrochurComponent,
                contact_component_1.ContactComponent
            ],
            providers: [
                user_service_1.UserService,
                platform_browser_1.Title
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
