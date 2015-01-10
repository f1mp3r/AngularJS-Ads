'use strict';

app.controller('AdminEditAdController', function ($scope, $location, $routeParams, $rootScope, townsService, categoriesService, adminService, notifyService) {
	$scope.pageData.title = 'Edit ad';
	$scope.pageData.showSidebar = false;
	var adId = $routeParams.id;
	$scope.towns = townsService.getTowns();
	$scope.categories = categoriesService.getCategories();

	adminService.getAdById(
		adId,
		function success(data) {
			$scope.adData = data;
			$scope.adData.date = new Date($scope.adData.date);
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
		console.log(adData);
		adminService.editAd(
			adId,
			adData,
			function success(data) {
				notifyService.showInfo('Your ad was successfully edited');
				$location.path('/admin/home');
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