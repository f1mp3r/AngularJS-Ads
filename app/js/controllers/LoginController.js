'use strict';

app.controller('LoginController', function ($scope, $location, authService, notifyService) {
	$scope.pageData.title = 'Login';

	$scope.login = function(userData) {
		authService.login(userData,
			function success() {
				notifyService.showInfo('Login successful');
				$location.path('/');
			},
			function error(err) {
				notifyService.showError('An error occured while trying to log you in', err);
			}
		);
	};
});