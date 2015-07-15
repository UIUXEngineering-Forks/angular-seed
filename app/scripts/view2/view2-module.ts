/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />


module myApp.view2 {
    'use strict';

    angular.module('myApp.view2', [
        'ngRoute',
        'myApp.view2.controller'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.when('/view2', {
            templateUrl: '/view2.html',
            controller: 'View2Ctrl'
        });
    }





}