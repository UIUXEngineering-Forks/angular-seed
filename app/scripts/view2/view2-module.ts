/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />


module myApp.view2 {
    'use strict';

    angular.module('myApp.view2', [
        'myApp.view2.controller'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider'];
    function config($stateProvider:ng.ui.IStateProvider):void {
        console.info("myApp.view2.comfig");

        $stateProvider.state('view2', {
            url: "/view2/:routeId",
            templateUrl: 'scripts/view2/view2.html',
            controller: 'View2Controller',
            controllerAs: 'View2Controller'
        });


    }

    function run():void {
        console.info("myApp.view2.run");
    }





}