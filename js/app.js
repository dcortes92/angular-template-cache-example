/* global angular */
var templateApp = angular.module("templateApp", ["ngRoute"]);

templateApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/main.html",
			controller: "mainCtrl as ctrl"
		})
		.when("/other", {
			templateUrl: "other.html",
			controller: "otherCtrl as ctrl"
		})
		.otherwise({redirectTo: "/"});
});