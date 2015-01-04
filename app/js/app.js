'use strict'

var adsModule = angular.module('adsModule', ['ngRoute']);

adsModule.constant('constants',{
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
				templateUrl: 'templates/login.html'
			}).
			when('/register', {
				templateUrl: 'templates/register.html'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);