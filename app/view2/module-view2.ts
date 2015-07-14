/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./module-config-view2.ts" />
/// <reference path="./module-controller-view2.ts" />

(()=>{
    'use strict';


    angular.module('mod.view2', ['ngRoute'])

        .config(mod.view2.config)

        .controller('View2Ctrl', module.view2.controller);

})();