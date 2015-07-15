/// <reference path="../../../typings/angularjs/angular.d.ts" />


module myApp.version {
    'use strict';

    angular.module('myApp.version', [
        'myApp.version.filter',
        'myApp.version.version-directive'
    ])

        .value('version', '0.1');

}