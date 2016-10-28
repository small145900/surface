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
var prompt_component_1 = require('./prompt.component');
var test_component_1 = require('./test.component');
var http_1 = require('@angular/http');
var PromptModule = (function () {
    function PromptModule() {
    }
    PromptModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                prompt_component_1.PromptComponent,
                test_component_1.TestComponent
            ],
            providers: [],
            bootstrap: [test_component_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PromptModule);
    return PromptModule;
}());
exports.PromptModule = PromptModule;
