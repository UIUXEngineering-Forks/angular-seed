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
                //templateUrl: 'scripts/view4-resolve-route/view4.html',
                controller: ['$state', 'routeId', function($state, routeId) {
                    console.log('/view4 routeId', routeId);
                    debugger;
                    if (!routeId) {

                        $state.go('view4.routeID', {routeId: 0});
                    }
                }],
                resolve: {
                    routeId: ['$log', '$stateParams', '$location', '$state', function ($log, $stateParams, $location, $state) {

                        $log.info('/view4 in config: ', $stateParams.routeId);
                        //$state.go('view.routeID', {routeId: 0});
                        //$location.path('/view4/0')
                        return $stateParams.routeId;
                    }]
                }
            })

            //TODO view4.routeId does not work
            .state('view4.routeID', {
                url: "/{routeId:[0-9]}",
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