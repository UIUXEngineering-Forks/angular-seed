/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view2 {



    class controller {

        private $log:ng.ILogService;
        private $scope: ng.IRootScopeService;

        public static $inject = ['$scope', '$log'];
        constructor($scope, $log) {
            this.$scope = $scope;
            this.$log = $log;
            this.$log.info('Create View2 Controller id: ', this.$scope.$id);

            this.$scope.$on("$destroy", function(event:ng.IAngularEvent) {
                console.info('View2 Controller $destroyed id:', event.targetScope.$id);
            });
        }


    }

    angular.module('myApp.view2.controller', [])
        .controller('View2Controller', controller);

    
}