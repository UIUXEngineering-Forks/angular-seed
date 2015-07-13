/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />


(()=>{
    'use strict';


    angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', ($routeProvider:ng.route.IRouteProvider):void => {
            $routeProvider.when('/view2', {
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
            });
        }])

        .controller('View2Ctrl', [():void => {}]);

})();