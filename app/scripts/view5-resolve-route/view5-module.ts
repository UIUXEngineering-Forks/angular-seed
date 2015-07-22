/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />


module myApp.view5 {
    'use strict';

    angular.module('myApp.view5', [
        'ngRoute',
        'myApp.view5.controller'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider

            .when('/view5/:routeId', {
                templateUrl: 'scripts/view5-resolve-route/view5.html',
                controller: 'View5Controller',
                controllerAs: 'View5Controller',
                resolve: {
                    routeId: ['$log', '$route', function ($log, $route) {

                        $log.info('/view5/:routeId in config: ', $route.current.params.routeId);

                        return $route.current.params.routeId

                    }]
                }
            });
    }


}