/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module myApp.version {
    'use strict';

    angular.module('myApp.version.filter', [])
        .filter('interpolateVersion', filter);

    filter.$inject = ['version'];
    function filter(version:string):any {
        return function (text:string) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }

}