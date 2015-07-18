/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../interfaces/sample-interfaces.ts" />

module myApp.sample {


    factory.$inject = ['$log'];
    export function factory ($log:ng.ILogService) {

        $log.info('create sampleFactory');

        var factoryApi = <myApp.IFactory>{};


        factoryApi.createNumber = function(value:number, base?:number, exponent?:number):myApp.INumber {

            $log.info('calling sampleFactory.createNumber');

            return <myApp.INumber>{
                value: value,
                base: (base)? base: 10,
                exponent: (exponent)? exponent: 1
            }

        };


        return factoryApi
    }



    angular.module('myApp.sample.factory', [])
        .factory('sampleFactory', factory)

}