/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />


(()=>{
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ]).config(config);


    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }
    
})();