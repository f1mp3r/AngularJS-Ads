'use strict';

app.controller('UserAdsController', function ($scope, $rootScope, userService, notifyService, appData) {
	$scope.pageData.title = 'My ads';
	$scope.pageData.showSidebar = false;
	$scope.adsParams = {
		'startPage' : 1,
		'pageSize' : appData.pageSize
	};

	$scope.reloadAds = function() {
		userService.getUserAds(
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

	$scope.statusChanged = function(statusChangedName) {
		$scope.statusChangedName = statusChangedName;
		$scope.adsParams.status = statusChangedName;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	};

	$scope.deactivateAd = function(id) {
		userService.deactivateAd(
			id,
			function success(data) {
				notifyService.showInfo('Your ad was successfully deactivated');
				$scope.reloadAds();
			},
			function error(err) {
				notifyService.showError('Couldn\'t deactivate ad.', err);
			}
		);
	}

	$scope.publishAgain = function(id) {
		userService.publishAgain(
			id,
			function success(data) {
				notifyService.showInfo('Your ad was successfully published again');
				$scope.reloadAds();
			},
			function error(err) {
				notifyService.showError('Couldn\'t publish your ad again.', err);
			}
		);
	}
});