/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="./cfg-app.ts" />

(()=>{
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'mod.view1',
        'mod.view2',
        'myApp.version'
    ]).config(myApp.config);

    
})();