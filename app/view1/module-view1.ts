/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./config-view1.ts" />
/// <reference path="./controller-view1.ts" />

(()=>{
    'use strict';


    angular.module('mod.view1', ['ngRoute'])

        .config(mod.view1.config)
        .controller('View1Ctrl', mod.view1.controller);

})();