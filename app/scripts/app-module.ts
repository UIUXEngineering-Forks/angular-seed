/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="services/sample-provider.ts" />

module myApp {

    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'myApp.view3',
        'myApp.view4',
        'myApp.view5',
        'myApp.version',
        'myApp.sample.provider'
    ]).config(config);


    config.$inject = ['$routeProvider', 'sampleProviderProvider'];
    function config($routeProvider:ng.route.IRouteProvider, sampleProvider:myApp.sample.provider):void {

        sampleProvider.setVersion('4.0');

        $routeProvider.otherwise({redirectTo: '/view1'});
    }

}