/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />


module myApp {

    config.$inject = ['$routeProvider'];
    export function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }

}