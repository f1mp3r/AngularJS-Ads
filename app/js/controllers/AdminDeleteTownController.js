'use strict';

app.controller('AdminDeleteTownController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Delete town';
	$scope.pageData.showSidebar = false;
	$scope.town = {};
	var id = $routeParams.id;
	$scope.town.name = $routeParams.townName;

	$scope.deleteTown = function() {
		adminService.deleteTown(
			id,
			function success(data) {
				notifyService.showInfo('The town was successfully deleted');
				$location.path('/admin/towns');
			},
			function error(err) {
				notifyService.showError('Couldn\'t delete your town.', err);
			}
		);
	}
});