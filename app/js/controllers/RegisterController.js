'use strict';

app.controller('RegisterController', function ($scope, $location, authService, notifyService, townsService) {
	$scope.pageData.title = 'Register';
	$scope.pageData.showSidebar = false;
	$scope.towns = townsService.getTowns();

	$scope.register = function(userData) {
		authService.register(userData,
			function success() {
				notifyService.showInfo('You have successfully registered!');
				window.location = '#/user/ads';
			},
			function error(err) {
				notifyService.showError("User registration failed", err);
			}
		);
	};

});