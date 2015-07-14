/// <reference path="../../../typings/angularjs/angular.d.ts" />

(()=> {

    'use strict';

    angular.module('myApp.version', [
        'myApp.version.interpolate-filter',
        'myApp.version.version-directive'
    ])

        .value('version', '0.1');

})();