/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.view1 {

    interface IView1ControllerScope  {
        version:string;
    }

    class controller implements IView1ControllerScope {

        public file:string = 'app/scripts/view1/view1-controller.ts';
        private $log:ng.ILogService;
        public version:string;

        public static $inject = ['$log', 'sampleProvider'];
        constructor($log,
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
        .controller('View1Controller', controller);


}