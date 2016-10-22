"use strict";
var router_1 = require('@angular/router');
var index_component_1 = require('./index.component');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var forgetPassword_component_1 = require('./forgetPassword.component');
var resetPassword_component_1 = require('./resetPassword.component');
var browse_component_1 = require('./browse.component');
var contact_component_1 = require('./contact.component');
var content_component_1 = require('./content.component');
var appRoutes = [
    {
        path: '',
        // redirectTo: '/dockyard',
        pathMatch: 'full',
        component: index_component_1.IndexComponent
    },
    {
        path: 'dockyard',
        component: index_component_1.IndexComponent
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
        path: 'content',
        component: content_component_1.ContentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
