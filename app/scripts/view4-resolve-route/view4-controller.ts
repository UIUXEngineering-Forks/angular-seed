/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view4 {



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

            this.$log.info('Create View4 Controller id: ', this.$scope.$id);
            this.$log.info('/view4/:routeId in controller: ', routeId);

            this.$scope.$on("$destroy", function(event:ng.IAngularEvent) {
                console.info('View4 Controller $destroyed id:', event.targetScope.$id);
            });
        }


    }

    angular.module('myApp.view4.controller', [])
        .controller('View4Controller', controller);

    
}