/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="sample-factory.ts" />
/// <reference path="../../../interfaces/sample-interfaces.ts" />

module myApp.sample {


    export class CalculateService implements myApp.ICalculate {

        public $log:ng.ILogService;
        public numberFactory:myApp.IFactory; //TODO fix this, should not be any

        public static $inject = ['$log', 'sampleFactory'];
        constructor($log:ng.ILogService, numberFactory) {
            $log.info('create sampleService');
            this.$log = $log;
            this.numberFactory = numberFactory;
        }

        public add(a:myApp.INumber, b:myApp.INumber): IResult {

            this.$log.info('calling sampleService,add');

            var resultant:myApp.INumber = this.numberFactory.createNumber( a.value + b.value);

            return <IResult>{
                result: resultant,
                value: resultant.value
            }
        }
    }

    angular.module('myApp.sample.service', ['myApp.sample.factory'])
        .service('sampleService', CalculateService)
}