/// <reference path="../../typings/angularjs/angular.d.ts" />

module module.view1 {

    export class controller {

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
}