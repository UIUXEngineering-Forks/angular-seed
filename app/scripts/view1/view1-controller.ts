/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../services/sample-service.ts" />

module myApp.view1 {

    interface IView1ControllerScope  {
        version:string;
    }

    class controller implements IView1ControllerScope {

        private $log:ng.ILogService;
        private addService:myApp.sample.CalculateService;
        private sampleFactory: myApp.IFactory;


        public file:string = 'app/scripts/view1/view1-controller.ts';
        public version:string;
        public addResult:number;

        public static $inject = ['$log', 'sampleProvider', 'sampleService', 'sampleFactory'];
        constructor($log,
                    sampleProvider:string,
                    sampleService,
                    sampleFactory)
        {
            this.$log = $log;
            this.logger('View1 Controller');
            this.version = sampleProvider;
            this.addService = sampleService;
            this.sampleFactory = sampleFactory;
            this.addTwoNumbers();
        }

        private addTwoNumbers():void {
            var number1 = this.sampleFactory.createNumber(2);
            var number2 = this.sampleFactory.createNumber(3);
            this.addResult = this.addService.add(number1, number2).value;
        }

        private logger(value) {
            this.$log.info(value);
        }



    }

    angular.module('myApp.view1.controller', ['myApp.sample.service', 'myApp.sample.provider', 'myApp.sample.factory'])
        .controller('View1Controller', controller);


}