'use strict';

app.factory('authService', function ($http, baseServiceUrl) {
	return {
		login: function(userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + 'user/login',
				data: userData
			};
			$http(request).success(function(data) {
				sessionStorage['currentUser'] = JSON.stringify(data);
				success(data);
			}).error(error);
		},

		logout: function() {
			delete sessionStorage['currentUser'];
		},

		register: function(userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + 'user/register',
				data: userData
			};
			$http(request).success(function(data) {
				sessionStorage['currentUser'] = JSON.stringify(data);
				success(data);
			}).error(error);
		},

		getCurrentUser: function() {
			var userObject = sessionStorage['currentUser'];
			if (userObject) {
				return JSON.parse(sessionStorage['currentUser']);
			}
		},

		isAnonymous: function() {
			return sessionStorage['currentUser'] == undefined;
		},

		isLoggedIn: function() {
			return sessionStorage['currentUser'] !== undefined;
		},

		isNormalUser: function() {
			var currentUser = this.getCurrentUser();
			return (currentUser !== undefined) && (!currentUser.isAdmin);
		},

		isAdmin: function() {
			var currentUser = this.getCurrentUser();
			return (currentUser !== undefined) && (currentUser.isAdmin);
		},

		getAuthHeaders: function() {
			var headers = {};
			var currentUser = this.getCurrentUser();
			if (currentUser) {
				headers['Authorization'] = 'Bearer ' + currentUser.access_token;
			}
			return headers;
		}
	}
});