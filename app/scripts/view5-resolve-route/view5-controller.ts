/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view5 {



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

            this.$log.info('Create View5 Controller id: ', this.$scope.$id);
            this.$log.info('/view5/:routeId in controller: ', routeId);

            this.$scope.$on("$destroy", function(event:ng.IAngularEvent) {
                console.info('View5 Controller $destroyed id:', event.targetScope.$id);
            });
        }


    }

    angular.module('myApp.view5.controller', [])
        .controller('View5Controller', controller);

    
}