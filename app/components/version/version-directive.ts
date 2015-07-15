/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.version {

    angular.module('myApp.version.version-directive', [])
        .directive('appVersion', appVersion);

    appVersion.$inject = ['version'];
    function appVersion(version:string) {
        return {
            restrct: 'AE',
            link: (scope:{}, elm, sttrs)=> {
                elm.text(version);
            }
        }
    }



}