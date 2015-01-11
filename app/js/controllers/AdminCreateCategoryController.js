'use strict';

app.controller('AdminCreateCategoryController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Create category';
	$scope.pageData.showSidebar = false;
	$scope.categoryData = {};

	$scope.createCategory = function(catData) {
		adminService.createCategory(
			catData,
			function success(data) {
				notifyService.showInfo('The category was successfully created');
				$location.path('/admin/categories');
			},
			function error(err) {
				notifyService.showError('Couldn\'t create your category.', err);
			}
		);
	}
});