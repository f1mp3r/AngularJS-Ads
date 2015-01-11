'use strict';

app.controller('AdminEditTownController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Edit town';
	$scope.pageData.showSidebar = false;
	$scope.townData = {};
	var id = $routeParams.id;
	$scope.townData.name = $routeParams.categoryName;

	$scope.editTown = function(townData) {
		adminService.editTown(
			id,
			townData,
			function success(data) {
				notifyService.showInfo('The town was successfully edited');
				$location.path('/admin/towns');
			},
			function error(err) {
				notifyService.showError('Couldn\'t edit your town.', err);
			}
		);
	}
});