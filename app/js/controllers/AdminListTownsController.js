'use strict';

app.controller('AdminListTownsController', function ($scope, $rootScope, adminService, notifyService, appData) {
	$scope.pageData.title = 'Towns';
	$scope.pageData.showSidebar = false;
	$scope.townParams = {
		'startPage' : 1,
		'pageSize' : appData.pageSize,
		'sortBy' : ''
	};

	$scope.reloadTowns = function() {
		adminService.getTowns(
			$scope.townParams,
			function success(data) {
				$scope.towns = data;
			},
			function error(err) {
				notifyService.showError('Cannot load towns', err);
			}
		);
	};

	$scope.reloadTowns();

	$scope.sortingChanged = function() {
		$scope.reloadTowns();
	}
});