/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="services/sample-provider.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
module myApp {

    'use strict';

    angular.module('myApp', [
        'ui.router',
        'myApp.view1',
        'myApp.view2',
        'myApp.view3',
        //'myApp.view4',
        //'myApp.view5',
        'myApp.version',
        'myApp.sample.provider'
    ]).config(config);


    config.$inject = ['$urlRouterProvider', 'sampleProviderProvider'];
    function config($urlRouterProvide:ng.ui.IUrlRouterProvider, sampleProvider:myApp.sample.provider):void {

        sampleProvider.setVersion('4.0');

        $urlRouterProvide.otherwise('/view1');
    }

}