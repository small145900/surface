"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var content_component_1 = require('./content.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'content',
        component: content_component_1.ContentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
