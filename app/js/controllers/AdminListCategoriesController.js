'use strict';

app.controller('AdminListCategoriesController', function ($scope, $rootScope, adminService, notifyService, appData) {
	$scope.pageData.title = 'Categories';
	$scope.pageData.showSidebar = false;
	$scope.categoryParams = {
		'startPage' : 1,
		'pageSize' : appData.pageSize,
		'sortBy' : ''
	};

	$scope.reloadCategories = function() {
		adminService.getCategories(
			$scope.categoryParams,
			function success(data) {
				$scope.categories = data;
			},
			function error(err) {
				notifyService.showError('Cannot load categories', err);
			}
		);
	};

	$scope.reloadCategories();

	$scope.sortingChanged = function() {
		$scope.reloadCategories();
	}
});