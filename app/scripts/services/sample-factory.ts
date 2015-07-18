/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../interfaces/sample-interfaces.ts" />

module myApp.sample {


//createNumber.$inject = ['$q'];
    export function factory () {


        var factoryApi = <myApp.IFactory>{};


        factoryApi.createNumber = function(value:number, base?:number, exponent?:number):myApp.INumber {

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