'use strict';

app.controller('UserEditProfileController', function ($scope, $routeParams, $rootScope, townsService, userService, notifyService) {
	$scope.pageData.title = 'Edit profile / change password';
	$scope.pageData.showSidebar = false;
	$scope.towns = townsService.getTowns();
	$scope.userData = {};

	userService.getUserProfile(
		function success(data) {
			$scope.userData = data;
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your profile data.', err);
		}
	);

	$scope.editProfile = function(userData) {
		userService.editUserProfile(
			userData,
			function success(data) {
				notifyService.showInfo('You have changed your profile data successfully!');
				window.location = '#/user/ads';
			},
			function error(err) {
				notifyService.showError('An error occured while changing your data!', err);
			}
		);
	}

	$scope.changePassword = function(passData) {
		userService.changeUserPassword(
			passData,
			function success(data) {
				notifyService.showInfo('You have changed your password successfully!');
				window.location = '#/user/ads';
			},
			function error(err) {
				notifyService.showError('An error occured while changing password!', err);
			}
		);
	}
});