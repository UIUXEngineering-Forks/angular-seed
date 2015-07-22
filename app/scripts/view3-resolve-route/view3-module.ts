/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />


module myApp.view3 {
    'use strict';

    angular.module('myApp.view3', [
        'ngRoute',
        'myApp.view3.controller'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider
            .when('/view3', {
                redirectTo: '/view3/1'
            })
            .when('/view3/:routeId', {
                templateUrl: 'scripts/view3-resolve-route/view3.html',
                controller: 'View3Controller',
                controllerAs: 'View3Controller',
                resolve: {
                    routeId: ['$log', '$route', function ($log, $route) {

                        $log.info('/view3/:routeId in config: ', $route.current.params.routeId);

                        return $route.current.params.routeId

                    }]
                }
            });
    }
}