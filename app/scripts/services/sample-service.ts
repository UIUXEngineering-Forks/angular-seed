/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.sample {

    //TODO put in different file
    export interface INumber {
        base: number;
        value: number;
        exponent: number;
    }


    export interface IResult {
        result: INumber;
        value: number;
    }

    class service {

        private $q:ng.IQService;
        private $http:ng.IHttpService;

        public static $inject = ['$q', '$http',];
        constructor($q:ng.IQService, $http:ng.IHttpService) {
            this.$q = $q;
            this.$http = $http;
        }

        //TODO what does "static" do?
        static add(a:INumber, b:INumber): IResult {
            //var deferred:ng.IDeferred<IResult> = this.$q.defer();
            var resultant:INumber = <INumber>{
                base:10,
                value: 0,
                exponent: 1
            };

            resultant.value = a.value + b.value;

            return <IResult>{
                result: resultant,
                value: resultant.value
            }
        }
    }

    angular.module('myApp.sample.service', [])
        .service('sampleService', service)
}