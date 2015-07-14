/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />


module mod.view1 {

    config.$inject = ['$routeProvider'];
    export function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }

}