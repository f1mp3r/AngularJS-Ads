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

			getUsers: function (params, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'admin/users',
					headers: authService.getAuthHeaders(),
					params: params
				};
				$http(request).success(success).error(error);
			},

			getTowns: function (params, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'admin/towns',
					headers: authService.getAuthHeaders(),
					params: params
				};
				$http(request).success(success).error(error);
			},

			getCategories: function (params, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'admin/categories',
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
			},

			getAdById: function (id, success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + 'admin/ads/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			editAd: function(id, adData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'admin/ads/' + id,
					headers: authService.getAuthHeaders(),
					data: adData
				};
				$http(request).success(success).error(error);
			},

			deleteAd: function (id, success, error) {
				var request = {
					method: 'DELETE',
					url: baseServiceUrl + 'admin/ads/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			createTown: function(townData, success, error) {
				var request = {
					method: 'POST',
					url: baseServiceUrl + 'admin/towns/',
					headers: authService.getAuthHeaders(),
					data: townData
				};
				$http(request).success(success).error(error);
			},

			editTown: function(id, townData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'admin/towns/' + id,
					headers: authService.getAuthHeaders(),
					data: townData
				};
				$http(request).success(success).error(error);
			},

			deleteTown: function (id, success, error) {
				var request = {
					method: 'DELETE',
					url: baseServiceUrl + 'admin/towns/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			},

			createCategory: function(categoryData, success, error) {
				var request = {
					method: 'POST',
					url: baseServiceUrl + 'admin/categories/',
					headers: authService.getAuthHeaders(),
					data: categoryData
				};
				$http(request).success(success).error(error);
			},

			editCategory: function(id, categoryData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + 'admin/categories/' + id,
					headers: authService.getAuthHeaders(),
					data: categoryData
				};
				$http(request).success(success).error(error);
			},

			deleteCategory: function (id, success, error) {
				var request = {
					method: 'DELETE',
					url: baseServiceUrl + 'admin/categories/' + id,
					headers: authService.getAuthHeaders(),
				};
				$http(request).success(success).error(error);
			}
		}
	}
);