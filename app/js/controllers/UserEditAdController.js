'use strict';

app.controller('UserEditAdController', function ($scope, $routeParams, $rootScope, townsService, categoriesService, userService, notifyService) {
	$scope.pageData.title = 'Edit ad';
	$scope.pageData.showSidebar = false;
	var adId = $routeParams.id;
	$scope.towns = townsService.getTowns();
	$scope.categories = categoriesService.getCategories();

	userService.getUserAdById(
		adId,
		function success(data) {
			$scope.adData = data;
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your ad', err);
		}
	);

	$scope.editAd = function(adData) {
		userService.editAd(
			adId,
			adData,
			function success(data) {
				notifyService.showInfo('Your ad was successfully edited');
			},
			function error(err) {
				notifyService.showError('Couldn\'t edit your ad.', err);
			}
		);
	}
});