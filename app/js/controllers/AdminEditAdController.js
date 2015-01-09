'use strict';

app.controller('AdminEditAdController', function ($scope, $location, $routeParams, $rootScope, townsService, categoriesService, adminService, notifyService) {
	$scope.pageData.title = 'Edit ad';
	$scope.pageData.showSidebar = false;
	var adId = $routeParams.id;
	$scope.towns = townsService.getTowns();
	$scope.categories = categoriesService.getCategories();
	$scope.dateOptions = {
		format: 'dd.mmm.yyyy',
		onSet: function(context) {
			console.log('date changed');
			console.log(adData.date);
			$scope.adData.dateChanged = true;
		}
	}

	adminService.getAdById(
		adId,
		function success(data) {
			var parsedDate = new Date(Date.parse(data.date));
			parsedDate = parsedDate.getDate() + '.' + parsedDate.getMonth() + '.' + parsedDate.getFullYear();
			data.dateFormatted = parsedDate;
			console.log(data);
			$scope.adData = data;
			$scope.adData.dateChanged = false;
			// $scope.adDate.dateFormatted = parsedDate;
			$scope.adData.changeImage = false;
			$scope.adData.newImage = false;
			console.log($scope.adData);
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your ad', err);
		}
	);

	$scope.editAd = function(adData) {
		if (adData.changeImage && !adData.newImage) {
			adData.imageDataUrl = '';
		}
		if (adData.dateChanged) {
			adData.date = adData.date.toISOString();
		}
		console.log(adData.date);
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