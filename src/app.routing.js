"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var content_component_1 = require('./content.component');
// import { RepoListComponent }  from './repoList.component';
// import { RepoCreateComponent }  from './repoCreate.component';
// import { RepoDetailComponent } from './repoDetail.component';
// import { OrgListComponent }      from './orgList.component';
// import { OrgCreateComponent }      from './orgCreate.component';
// import { UserSettingComponent }      from './userSetting.component';
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
