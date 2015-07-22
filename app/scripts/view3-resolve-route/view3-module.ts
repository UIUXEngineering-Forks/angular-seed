/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />


module myApp.view3 {
    'use strict';

    angular.module('myApp.view3', [
        'myApp.view3.controller'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider:ng.ui.IStateProvider):void {
        console.info("myApp.view3.comfig");

        $stateProvider
            .state('view3', {
                url: "/view3",
                resolve: {
                    routeId: ['$log', '$stateParams', '$location', function ($log, $stateParams, $location) {

                        $log.info('/view3/:routeId in config: ', $stateParams.routeId);

                        $location.path('/view3/0')


                    }]
                }
            })
            //TODO view3.routeId does not work
            .state('view3RouteId', {
                url: "/view3/:routeId",
                templateUrl: 'scripts/view3-resolve-route/view3.html',
                controller: 'View3Controller',
                controllerAs: 'View3Controller',
                resolve: {
                    routeId: ['$log', '$stateParams', function ($log, $stateParams) {

                        $log.info('/view3/:routeId in config: ', $stateParams.routeId);

                        return $stateParams.routeId


                    }]
                }
            });



    }

    function run():void {
        console.info("myApp.view3.run");
    }
}