'use strict';

app.controller('AdminEditCategoryController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Edit category';
	$scope.pageData.showSidebar = false;
	$scope.categoryData = {};
	var id = $routeParams.id;
	$scope.categoryData.name = $routeParams.categoryName;

	$scope.editCategory = function(catData) {
		adminService.editCategory(
			id,
			catData,
			function success(data) {
				notifyService.showInfo('The category was successfully edited');
				$location.path('/admin/categories');
			},
			function error(err) {
				notifyService.showError('Couldn\'t edit your category.', err);
			}
		);
	}
});