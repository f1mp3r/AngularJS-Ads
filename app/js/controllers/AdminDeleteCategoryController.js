'use strict';

app.controller('AdminDeleteCategoryController', function ($scope, $location, $routeParams, $rootScope, adminService, notifyService) {
	$scope.pageData.title = 'Delete category';
	$scope.pageData.showSidebar = false;
	$scope.category = {};
	var id = $routeParams.id;
	$scope.category.name = $routeParams.categoryName;

	$scope.deleteCategory = function() {
		adminService.deleteCategory(
			id,
			function success(data) {
				notifyService.showInfo('The category was successfully deleted');
				$location.path('/admin/categories');
			},
			function error(err) {
				notifyService.showError('Couldn\'t delete your category.', err);
			}
		);
	}
});