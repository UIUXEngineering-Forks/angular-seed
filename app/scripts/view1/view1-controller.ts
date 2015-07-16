/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view1 {

    interface IView1ControllerScope  {
        version:string;
    }

    class controller implements IView1ControllerScope {

        private $log;
        public version:string;

        public static $inject = ['$scope', '$log', 'sampleProvider'];
        constructor(public $scope:IView1ControllerScope,
                    $log:ng.ILogService,
                    sampleProvider:string)
        {
            this.$log = $log;
            this.logger('View1 Controller');
            this.version = sampleProvider;

        }

        private logger(value) {
            this.$log.info(value);
        }

    }

    angular.module('myApp.view1.controller', [])
        .controller('View1Ctrl', controller);


}