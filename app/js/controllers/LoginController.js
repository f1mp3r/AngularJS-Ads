'use strict';

app.controller('LoginController', function ($scope, $location, authService, notifyService) {
	$scope.pageData.title = 'Login';
	$scope.pageData.showSidebar = false;

	$scope.login = function(userData) {
		authService.login(userData,
			function success() {
				notifyService.showInfo('Login successful');
				$location.path('/user/ads');
			},
			function error(err) {
				notifyService.showError('An error occured while trying to log you in', err);
			}
		);
	};
});