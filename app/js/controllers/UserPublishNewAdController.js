'use strict';

app.controller('UserPublishNewAdController', function ($scope, $location, townsService, categoriesService, userService, notifyService) {
	$scope.pageData.title = 'Publish your ad';
	$scope.pageData.showSidebar = false;
	$scope.adData = {
		townId: null,
		categoryId: null
	};
	$scope.categories = categoriesService.getCategories();
	$scope.towns = townsService.getTowns();

	$scope.publishAd = function(adData) {
		userService.createNewAd(
			adData,
			function success() {
				notifyService.showInfo('Your ad was successfully submitted! After being approved it will be visible for all users.');
				$location.path("/user/ads");
			},
			function error(err) {
				notifyService.showError('An error occured while trying to publish your ad!', err);
			}
		);
	};

	$scope.$on('flow::fileAdded', function (event, $flow, flowFile) {
		var reader = new FileReader();
		reader.onload = function(event) {
			$scope.adData.imageDataUrl = event.target.result;
			$scope.adData.newImage = true;
		};
		reader.readAsDataURL(flowFile.file);
	});
});