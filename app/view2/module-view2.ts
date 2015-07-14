/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./config-view2.ts" />
/// <reference path="./controller-view2.ts" />

(()=>{
    'use strict';


    angular.module('mod.view2', ['ngRoute'])

        .config(mod.view2.config)

        .controller('View2Ctrl', mod.view2.controller);

})();