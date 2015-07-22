/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />


module myApp.view4 {
    'use strict';

    angular.module('myApp.view4', [
        'myApp.view4.controller'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider'];
    function config($stateProvider:ng.ui.IStateProvider):void {
       
        console.info("myApp.view4.comfig");

        $stateProvider
            .state('view4', {
                url: "/view4",
                resolve: {
                    routeId: ['$log', '$stateParams', '$location', function ($log, $stateParams, $location) {

                        $log.info('/view4 in config: ', $stateParams.routeId);
                        $location.path('/view4/0')
                    }]
                }
            })

            //TODO view4.routeId does not work
            .state('view4RouteId', {
                url: "/view4/:routeId",
                templateUrl: 'scripts/view4-resolve-route/view4.html',
                controller: 'View4Controller',
                controllerAs: 'View4Controller',
                resolve: {
                    routeId: ['$log', '$stateParams', function ($log, $stateParams) {

                        $log.info('/view4/:routeId in config: ', $stateParams.routeId);

                        return $stateParams.routeId


                    }]
                }
            });
        

    }

    function run():void {
        console.info("myApp.view4.run");
    }


}