var configAgenda = function($routeProvider){
 
    $routeProvider.when("/", {
        controller: "notasController",
        templateUrl: "views/home.html"
    }).when("/analytics", {
        controller: "analyticsController",
        templateUrl: "views/analytics.html"
    }).when("/news", {
        controller: "newsController",
        templateUrl: "views/news.html"
    });
 
}
 
//creamos el modulo y le aplicamos la configuración
var Agenda = angular.module("Agenda", ["ngRoute","ngMasonry"]).config(configAgenda);