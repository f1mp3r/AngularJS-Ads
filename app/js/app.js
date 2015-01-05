'use strict'

var adsModule = angular.module('adsModule', ['ngRoute', 'ngSanitize']);

adsModule.constant('constants', {
	baseUrl: 'http://softuni-ads.azurewebsites.net/api/',
	defaultPageSize: 5,
	defaultStartPage: 1,
	defaultImage: 'images/no-photo.png',
});

adsModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'templates/ads.html',
				controller: 'MainAdsController'
			}).
			when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'LoginController'
			}).
			when('/register', {
				templateUrl: 'templates/registration-form.html',
				controller: 'RegistrationController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);