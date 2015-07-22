/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />


module myApp.view2 {
    'use strict';

    angular.module('myApp.view2', [
        'ngRoute',
        'myApp.view2.controller'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        console.info("myApp.view2.comfig");

        $routeProvider.when('/view2', {
            templateUrl: 'scripts/view2/view2.html',
            controller: 'View2Controller',
            controllerAs: 'View2Controller'
        });
    }

    function run():void {
        console.info("myApp.view2.run");
    }





}