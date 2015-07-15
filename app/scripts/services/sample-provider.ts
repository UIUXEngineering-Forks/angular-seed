/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.sample {


    export class provider implements ng.IServiceProvider {

        //public static $inject = ['version'];

        private version:string;

        setVersion(newVersion:string) {
            this.version = newVersion;
        }

        //TODO if can pass param into constructor
        constructor() {
            //this.version = version;
            this.$get.$inject = ['version'];
        }


        $get(oldVersion:string):string {
            var _self = this;

            if (_self.version) {
                return _self.version;
            }

            return oldVersion;
        }

    }

    angular.module('myApp.sample.provider', ['myApp.version'])
    .provider('sampleProvider', provider)
}