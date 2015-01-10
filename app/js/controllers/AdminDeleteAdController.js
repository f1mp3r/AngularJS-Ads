'use strict';

app.controller('AdminDeleteAdController', function ($scope, $location, $routeParams, $rootScope, townsService, categoriesService, adminService, notifyService) {
	$scope.pageData.title = 'Delete ad';
	$scope.pageData.showSidebar = false;
	var adId = $routeParams.id;

	adminService.getAdById(
		adId,
		function success(data) {
			$scope.ad = data;
		},
		function error(err) {
			notifyService.showError('Couldn\'t load your ad.', err);
		}
	);

	$scope.delete = function(id) {
		adminService.deleteAd(
			id,
			function success(data) {
				notifyService.showInfo('Your ad was successfully deleted');
				$location.path('/admin/home');
			},
			function error(err) {
				notifyService.showError('Couldn\'t delete your ad.', err);
			}
		);
	}
});