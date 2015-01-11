'use strict';

app.controller('AdminCreateTownController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Create town';
	$scope.pageData.showSidebar = false;
	$scope.townData = {};

	$scope.createTown = function(catData) {
		adminService.createTown(
			catData,
			function success(data) {
				notifyService.showInfo('The town was successfully created');
				$location.path('/admin/categories');
			},
			function error(err) {
				notifyService.showError('Couldn\'t create your town.', err);
			}
		);
	}
});