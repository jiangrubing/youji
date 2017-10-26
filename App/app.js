var  app = angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("youji",{
        url:"/youji",
        templateUrl:"./App/Views/youji.html",
        controller:"youjiController"
    })
    $urlRouterProvider.otherwise("youji");
});