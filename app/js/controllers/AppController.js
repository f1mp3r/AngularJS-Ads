'use strict';

app.controller('AppController', function ($scope, authService, appData, notifyService) {
	$scope.appData = appData;
	$scope.authService = authService;
	$scope.pageData = {
		title: 'Home'
	}

	$scope.logout = function() {
		authService.logout();
		notifyService.showInfo('You have successfully logged out!');
		window.location = '#/'
	};
	
});