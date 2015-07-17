/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module myApp.version {

    angular.module('myApp.version.version-directive', [])
        .directive('appVersion', appVersion);

    appVersion.$inject = ['version'];
    function appVersion(version:string) {
        return {
            restrct: 'AE',
            link: (scope:any, elm, sttrs)=> {
                scope.file = 'app/scripts/components/version/version-directive.ts';
                elm.text(version);
            }
        }
    }



}