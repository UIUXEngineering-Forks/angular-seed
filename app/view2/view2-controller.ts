/// <reference path="../../typings/angularjs/angular.d.ts" />

module myApp.view2 {



    class controller {

        private $log;

        public static $inject = ['$log'];
        constructor($log:ng.ILogService) {
            this.$log = $log;
            this.logger('View2 Controller');
        }

        private logger(value) {
            this.$log.info(value);
        }

    }

    angular.module('myApp.view2.controller', [])
        .controller('View2Ctrl', controller);

    
}