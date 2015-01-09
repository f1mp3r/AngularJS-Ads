'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination', 'flow']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('appData', {
	pageSize: 5,
	appName: 'AdSystem',
	defaultImage: 'data:image/jpg;base64,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'
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
		controller: 'UserEditAdController'
	});
	$routeProvider.when('/user/ads/delete/:id', {
		templateUrl: 'templates/user/ads/delete.html',
		controller: 'UserDeleteAdController'
	});
	$routeProvider.when('/user/profile/edit', {
		templateUrl: 'templates/user/profile/edit.html',
		controller: 'UserEditProfileController'
	});

	// Administration part below

	$routeProvider.when('/admin/home', {
		templateUrl: 'templates/admin/ads.html',
		controller: 'AdminHomeController'
	});
	$routeProvider.when('/admin/ads/edit/:id', {
		templateUrl: 'templates/admin/ads/edit.html',
		controller: 'AdminEditAdController'
	});
	$routeProvider.when('/admin/ads/delete/:id', {
		templateUrl: 'templates/admin/ads/delete.html',
		controller: 'AdminDeleteAdController'
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

app.run(function ($rootScope, $location, authService) {
	$rootScope.$on('$locationChangeStart', function (event) {
		if ($location.path().indexOf("/admin/") != -1 && !authService.isAdmin()) {
			$location.path("/");
		}
	});
});