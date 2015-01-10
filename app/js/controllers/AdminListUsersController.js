'use strict';

app.controller('AdminListUsersController', function ($scope, $rootScope, adminService, notifyService, appData) {
	$scope.pageData.title = 'Users';
	$scope.pageData.showSidebar = false;
	$scope.userParams = {
		'startPage' : 1,
		'pageSize' : appData.pageSize,
		'sortBy' : ''
	};

	$scope.reloadUsers = function() {
		adminService.getUsers(
			$scope.userParams,
			function success(data) {
				$scope.users = data;
			},
			function error(err) {
				notifyService.showError('Cannot load users', err);
			}
		);
	};

	$scope.reloadUsers();

	$scope.sortingChanged = function() {
		$scope.reloadUsers();
	}
});
