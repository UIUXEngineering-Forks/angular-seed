/// <reference path="../../typings/angularjs/angular.d.ts" />

module module.view2 {

    export class ctr {

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
}