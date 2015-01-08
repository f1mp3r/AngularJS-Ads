'use strict';

app.controller('UserDeleteAdController', function ($scope, $location, $routeParams, $rootScope, townsService, categoriesService, userService, notifyService) {
	$scope.pageData.title = 'Delete ad';
	$scope.pageData.showSidebar = false;
	var adId = $routeParams.id;

	userService.getUserAdById(
		adId,
		function success(data) {
			$scope.ad = data;
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your ad.', err);
		}
	);

	$scope.delete = function(id) {
		userService.deleteAd(
			id,
			function success(data) {
				notifyService.showInfo('Your ad was successfully deleted');
				$location.path('/user/ads');
			},
			function error(err) {
				notifyService.showError('Couldn\'t delete your ad.', err);
			}
		);
	}
});