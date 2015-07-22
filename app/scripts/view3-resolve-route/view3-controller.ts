/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view3 {



    class controller {

        private $log:ng.ILogService;
        private $scope: ng.IRootScopeService;
        public routeId: number;

        public static $inject = ['$scope', '$log', 'routeId'];
        constructor($scope,
                    $log,
                    routeId) {
            this.$scope = $scope;
            this.$log = $log;
            this.routeId = routeId;

            this.$log.info('Create View3 Controller id: ', this.$scope.$id);
            this.$log.info('/view3/:routeId in controller: ', routeId);

            this.$scope.$on("$destroy", function(event:ng.IAngularEvent) {
                console.info('View3 Controller $destroyed id:', event.targetScope.$id);
            });
        }


    }

    angular.module('myApp.view3.controller', [])
        .controller('View3Controller', controller);

    
}