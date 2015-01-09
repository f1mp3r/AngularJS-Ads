'use strict';

app.controller('AdminHomeController', function ($scope, $rootScope, adminService, notifyService, appData) {
	$scope.pageData.title = 'Administration';
	$scope.pageData.showSidebar = true;
	$scope.adsParams = {
		'startPage' : 1,
		'pageSize' : appData.pageSize,
		'sortBy' : ''
	};

	$scope.reloadAds = function() {
		adminService.getAds(
			$scope.adsParams,
			function success(data) {
				$scope.ads = data;
			},
			function error(err) {
				notifyService.showError('Cannot load ads', err);
			}
		);
	};

	$scope.reloadAds();

	$scope.$on('categorySelectionChanged', function(event, selectedCategoryId) {
		$scope.adsParams.categoryId = selectedCategoryId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});

	$scope.$on('townSelectionChanged', function(event, selectedTownId) {
		$scope.adsParams.townId = selectedTownId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});

	$scope.sortingChanged = function() {
		$scope.reloadAds();
	}

	$scope.statusChanged = function(statusChangedName) {
		$scope.statusChangedName = statusChangedName;
		$scope.adsParams.status = statusChangedName;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	};

	$scope.approveAd = function(id) {
		adminService.approveAd(
			id,
			function success(data) {
				notifyService.showInfo(data.message);
				$scope.reloadAds();
			},
			function error(err) {
				notifyService.showError('Couldn\'t approve ad', err);
			}
		);
	}

	$scope.rejectAd = function(id) {
		adminService.rejectAd(
			id,
			function success(data) {
				notifyService.showInfo(data.message);
				$scope.reloadAds();
			},
			function error(err) {
				notifyService.showError('Couldn\'t approve ad', err);
			}
		);
	}
});
