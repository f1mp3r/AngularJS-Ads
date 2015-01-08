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
			$scope.adData.changeImage = false;
			$scope.adData.newImage = false;
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your ad', err);
		}
	);

	$scope.editAd = function(adData) {
		if (adData.changeImage && !adData.newImage) {
			adData.imageDataUrl = '';
		}
		userService.editAd(
			adId,
			adData,
			function success(data) {
				notifyService.showInfo('Your ad was successfully edited');
				window.location = "#/user/ads";
			},
			function error(err) {
				notifyService.showError('Couldn\'t edit your ad.', err);
			}
		);
	}

	$scope.$on('flow::fileAdded', function (event, $flow, flowFile) {
		var reader = new FileReader();
		reader.onload = function(event) {
			$scope.adData.imageDataUrl = event.target.result;
			$scope.adData.newImage = true;
		};
		reader.readAsDataURL(flowFile.file);
	});
});