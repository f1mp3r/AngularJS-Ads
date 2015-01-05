adsModule.controller('LoginController', function ($scope, mainData, constants, authHeaders) {
	$scope.username = '';
	$scope.password = '';
	$scope.badLogin = false;
	
	$scope.login = function() {
		mainData.login(
			$scope.username,
			$scope.password,
			function success(data, status, headers, config) {
				sessionStorage['access_token'] = data.access_token;
				authHeaders.Authorization = 'Bearer ' + data.access_token;

				mainData.getLoggedUserData(
					function success(data) {
						sessionStorage['userData'] = JSON.stringify({
							username: data.username,
							name: data.name,
							email: data.email
						});
					},
					function error(data) {
						console.error(data);
					}
				);
				window.location = '#/';
			},
			function error(data, status, headers, config) {
				$scope.badLogin = true;
				$scope.badLoginMessage = data.error_description;
			}
		)
	}
});