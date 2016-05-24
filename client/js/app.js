var app = angular.module("cultural",["ngRoute", "ngResource"]);

app.config(function($routeProvider, $locationProvider, $httpProvider){
	$routeProvider
	.when("/", {
		templateUrl: "/client/views/templates/home.html",
		controller: "Searching",
	})
});