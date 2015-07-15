/// <reference path="../../typings/angularjs/angular.d.ts" />

module myApp.view1 {


    class controller {

        private $log;

        public static $inject = ['$log'];
        constructor($log:ng.ILogService) {
            this.$log = $log;
            this.logger('View1 Controller');
        }

        private logger(value) {
            this.$log.info(value);
        }

    }

    angular.module('myApp.view1.controller', [])
        .controller('View1Ctrl', controller);


}