/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view1 {


    class controller {

        private $log;

        public static $inject = ['$scope', '$log', 'sampleProvider'];
        constructor(public $scope:ng.IScope,
                    $log:ng.ILogService,
                    sampleProvider:string)
        {
            this.$log = $log;
            this.logger('View1 Controller');
            this.$scope.version = sampleProvider

        }

        private logger(value) {
            this.$log.info(value);
        }

    }

    angular.module('myApp.view1.controller', [])
        .controller('View1Ctrl', controller);


}