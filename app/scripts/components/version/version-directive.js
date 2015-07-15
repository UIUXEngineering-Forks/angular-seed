/// <reference path="../../../typings/angularjs/angular.d.ts" />
var myApp;
(function (myApp) {
    var version;
    (function (_version) {
        angular.module('myApp.version.version-directive', []).directive('appVersion', appVersion);
        appVersion.$inject = ['version'];
        function appVersion(version) {
            return {
                restrct: 'AE',
                link: function (scope, elm, sttrs) {
                    elm.text(version);
                }
            };
        }
    })(version = myApp.version || (myApp.version = {}));
})(myApp || (myApp = {}));
//# sourceMappingURL=version-directive.js.map