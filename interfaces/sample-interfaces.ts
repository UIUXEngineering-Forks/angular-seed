/// <reference path="../typings/angularjs/angular.d.ts" />

module myApp {
    export interface IFactory extends ng.IServiceProviderFactory{
        createNumber(a:number, b?:number, c?:number):INumber;
    }

    export interface IResult {
        result: myApp.INumber;
        value: number;
    }


    export interface ICalculate  {
        //$log:ng.ILogService;
        //numberFactory:IFactory;
        add(a:INumber, b:INumber):IResult;
    }

    export interface INumber {
        base: number;
        value: number;
        exponent: number;
    }
}