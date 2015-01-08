'use strict';

app.controller('RegisterController', function ($scope, $location, authService, notifyService, townsService) {
	$scope.pageData.title = 'Register';

	$scope.userData = {townId: null};
	$scope.towns = townsService.getTowns();

	// TODO: load the towns in $scope (for the towns drop-down list)

	$scope.register = function(userData) {
		authService.register(userData,
			function success() {
				// TODO: display success message
				// TODO: redirect to login screen
			},
			function error(err) {
				notifyService.showError("User registration failed", err);
			}
		);
	};

});