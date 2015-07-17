/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.sample {


    class provider implements ng.IServiceProvider {

        //public static $inject = ['version'];

        private newVersion:string;

        setVersion(newVersion:string) {
            this.newVersion = newVersion;
        }

        //TODO if can pass param into constructor
        constructor() {
            //this.version = version;
            this.$get.$inject = ['version'];
        }


        $get(oldVersion:string):string {
            var _self = this;

            if (_self.newVersion) {
                return _self.newVersion;
            }

            return oldVersion;
        }

    }

    angular.module('myApp.sample.provider', ['myApp.version'])
    .provider('sampleProvider', provider)
}