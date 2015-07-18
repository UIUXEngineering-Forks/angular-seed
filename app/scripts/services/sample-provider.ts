/// <reference path="../../../typings/angularjs/angular.d.ts" />

module myApp.sample {


    class provider implements ng.IServiceProvider {

        //public static $inject = ['version'];

        private newVersion:string;

        setVersion(newVersion:string) {
            this.newVersion = newVersion;
        }

        constructor() {
            console.info('create sampleProvider');
            this.$get.$inject = ['version', '$log'];
        }


        $get(oldVersion:string, $log:ng.ILogService):string {

            $log.info('calling sampleProvider');

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