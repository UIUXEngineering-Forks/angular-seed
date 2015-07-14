/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./cfg-view1.ts" />
/// <reference path="./ctr-view1.ts" />

(()=>{
    'use strict';


    angular.module('mod.view1', ['ngRoute'])

        .config(mod.view1.config)
        .controller('View1Ctrl', mod.view1.ctr);

})();