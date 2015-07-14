/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />


module mod.view2 {

    config.$inject = ['$routeProvider'];
    export function config($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }

}