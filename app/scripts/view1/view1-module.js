/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var myApp;
(function (myApp) {
    var view1;
    (function (view1) {
        'use strict';
        angular.module('myApp.view1', [
            'ngRoute',
            'myApp.view1.controller'
        ]).config(config);
        config.$inject = ['$routeProvider'];
        function config($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: '/view1.html',
                controller: 'View1Ctrl'
            });
        }
    })(view1 = myApp.view1 || (myApp.view1 = {}));
})(myApp || (myApp = {}));
//# sourceMappingURL=view1-module.js.map