"use strict";
var router_1 = require('@angular/router');
var index_component_1 = require('./index.component');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var forgetPassword_component_1 = require('./forgetPassword.component');
var resetPassword_component_1 = require('./resetPassword.component');
var browse_component_1 = require('./browse.component');
var brochur_component_1 = require('./brochur.component');
var contact_component_1 = require('./contact.component');
var content_component_1 = require('./content.component');
var userRepo_component_1 = require('./userRepo.component');
var browseDetail_component_1 = require('./browseDetail.component');
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: index_component_1.IndexComponent
    },
    {
        path: 'brochur',
        component: brochur_component_1.BrochurComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'forgetPassword',
        component: forgetPassword_component_1.ForgetPwdComponent
    },
    {
        path: 'resetPassword',
        component: resetPassword_component_1.ResetPwdComponent
    },
    {
        path: 'browse',
        component: browse_component_1.BrowseComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'user/:username',
        component: userRepo_component_1.UserRepoComponent
    },
    {
        path: 'detail/:repoName',
        component: browseDetail_component_1.BrowseDetailComponent
    },
    {
        path: 'content',
        component: content_component_1.ContentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
