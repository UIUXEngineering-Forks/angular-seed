/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />



module myApp.view1 {
    'use strict';

    angular.module('myApp.view1', [
        'myApp.view1.controller'])
        .config(config)
        .run(run);


    config.$inject = ['$stateProvider'];
    function config($stateProvider:ng.ui.IStateProvider):void {

        console.info("myApp.view1.comfig");

        $stateProvider.state('view1', {
            url: "/view1",
            templateUrl: 'scripts/view1/view1.html',
            controller: 'View1Controller',
            controllerAs: 'view1Controller'
        })
    }

    function run():void {
        console.info("myApp.view1.run");
    }
}