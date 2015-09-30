/* global angular */
var templateApp = angular.module("templateApp", ["ngRoute"]);

templateApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			template: "this is the main view {{ctrl.message}}",
			controller: "mainCtrl as ctrl"
		})
		.when("/other", {
			template: "this is the other view {{ctrl.message}}",
			controller: "otherCtrl as ctrl"
		})
		.otherwise({redirectTo: "/"});
});