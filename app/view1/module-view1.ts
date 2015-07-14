/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./module-config-view1.ts" />
/// <reference path="./module-controller-view1.ts" />

(()=>{
    'use strict';


    angular.module('mod.view1', ['ngRoute'])

        .config(module.view1.config)
        .controller('View1Ctrl', module.view1.controller);

})();