'use strict';

app.factory('userService',
	function ($http, baseServiceUrl, authService) {
		return {
			createNewAd: function (adData, success, error) {
				var request = {
					method: 'POST',
					url: baseServiceUrl + 'user/ads',
					headers: authService.getAuthHeaders(),
					data: adData
				};
				$http(request).success(success).error(error);
			},

			getUserAds: function (params, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'user/ads',
					headers: authService.getAuthHeaders(),
					params: params
				};
				$http(request).success(success).error(error);
			},

			getUserAdById: function (id, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'user/ads/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			deactivateAd: function (id, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'user/ads/deactivate/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			publishAgain: function (id, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'user/ads/publishagain/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			editUserAd: function(id, adData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'user/ads/' + id,
					headers: authService.getAuthHeaders(),
					data: adData
				};
				$http(request).success(success).error(error);
			},

			deleteUserAd: function (id, success, error) {
				var request = {
					method: 'DELETE',
					url: baseServiceUrl + 'user/ads/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			changeUserPassword: function (success, error) {
				var request = {
					method: 'DELETE',
					url: baseServiceUrl + 'user/changePassword',
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			getUserProfile: function (success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'user/profile',
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			editUserProfile: function (profileData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'user/profile',
					headers: authService.getAuthHeaders(),
					params: profileData
				};
				$http(request).success(success).error(error);
			}
		}
	}
);
