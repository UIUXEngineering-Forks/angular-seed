/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />


module myApp.view4 {
    'use strict';

    angular.module('myApp.view4', [
        'ngRoute',
        'myApp.view4.controller'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider
            .when('/view4', {
                templateUrl: 'scripts/view4-resolve-route/view4.html',
                controller: 'View4Controller',
                controllerAs: 'View4Controller',
                resolve: {
                    routeId: ['$log', '$location', function ($log, $location) {
                        $log.info('/view4 in config: $location.path(\"/view4/1\"');
                        $location.path("/view4/1");
                    }]
                }
            })
            .when('/view4/:routeId', {
                templateUrl: 'scripts/view4-resolve-route/view4.html',
                controller: 'View4Controller',
                controllerAs: 'View4Controller',
                resolve: {
                    routeId: ['$log', '$route', function ($log, $route) {

                        $log.info('/view4/:routeId in config: ', $route.current.params.routeId);

                        return $route.current.params.routeId

                    }]
                }
            });
    }


}