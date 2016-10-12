"use strict";
var router_1 = require('@angular/router');
var repoList_component_1 = require('./repoList.component');
var repoCreate_component_1 = require('./repoCreate.component');
var repoDetail_component_1 = require('./repoDetail.component');
var orgList_component_1 = require('./orgList.component');
var orgCreate_component_1 = require('./orgCreate.component');
var userSetting_component_1 = require('./userSetting.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/repositories',
        pathMatch: 'full'
    },
    {
        path: 'repositories',
        component: repoList_component_1.RepoListComponent
    },
    {
        path: 'repoCreate',
        component: repoCreate_component_1.RepoCreateComponent
    },
    {
        path: 'repoDetail',
        component: repoDetail_component_1.RepoDetailComponent
    },
    // {
    //   path: 'repoDetail/:repoId',
    //   component: RepoDetailComponent
    // },
    {
        path: 'organizations',
        component: orgList_component_1.OrgListComponent
    },
    {
        path: 'orgCreate',
        component: orgCreate_component_1.OrgCreateComponent
    },
    {
        path: 'userSetting',
        component: userSetting_component_1.UserSettingComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
