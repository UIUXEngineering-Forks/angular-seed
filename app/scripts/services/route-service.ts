/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />


module myApp.sample {

    //myApp.sample.routerService
    export class RouteService {

        public static $inject = [ '$rootScope', '$stateProvider', '$urlRouterProvider'];
        constructor(
            private $rootScope:ng.IRootScopeService,
            private $stateProvider:angular.ui.IStateProvider,
            private $urlRouterProvider:angular.ui.IUrlRouterProvider
        ) {
            this.$rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    console.log(event, toState, toParams, fromState, fromParams);
                });

            this.$get.$inject = ['$log'];

        }

        $get($log:ng.ILogService):any {

            $log.info('calling sampleProvider');

            var _self = this;



            return {};
        }
    }

    angular.module('myApp.sample.routerService', ['ng'])
        .provider('sampleService', RouteService)

}