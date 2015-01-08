'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('appData', {
	pageSize: 5,
	appName: 'AdSystem'
});

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/user/ads', {
		templateUrl: 'templates/user/ads.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/ads/publish', {
		templateUrl: 'templates/user/ads/publish.html',
		controller: 'UserPublishNewAdController'
	});
	$routeProvider.when('/user/ads/edit/:id', {
		templateUrl: 'templates/user/ads/edit.html',
		controller: 'UserEditAddController'
	});
	$routeProvider.when('/user/ads/delete/:id', {
		templateUrl: 'templates/user/ads/delete.html',
		controller: 'UserDeleteAddController'
	});
	$routeProvider.otherwise(
		{ redirectTo: '/' }
	);
});

app.run(function ($rootScope, $location, authService) {
	$rootScope.$on('$locationChangeStart', function (event) {
		if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
			$location.path("/");
		}
	});
});
