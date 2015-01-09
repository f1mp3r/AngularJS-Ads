'use strict';

app.factory('adminService',
	function ($http, baseServiceUrl, authService) {
		return {
			getAds: function (params, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'admin/ads',
					headers: authService.getAuthHeaders(),
					params: params
				};
				$http(request).success(success).error(error);
			},

			rejectAd: function (id, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'admin/ads/reject/' + id,
					headers: authService.getAuthHeaders()
				};
				$http(request).success(success).error(error);
			},

			approveAd: function (id, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'admin/ads/approve/' + id,
					headers: authService.getAuthHeaders()
				};
				$http(request).success(success).error(error);
			}
		}
	}
);