adsModule.controller('LoginController', function ($scope, mainData, constants) {
		$scope.username = '';
		$scope.password = '';
		$scope.badLogin = false;
	$scope.login = function() {
		mainData.login(
			$scope.username,
			$scope.password,
			function success(data, status, headers, config) {
				sessionStorage['access_token'] = data.access_token;
				window.location = '#/';
			},
			function error(data, status, headers, config) {
				$scope.badLogin = true;
				$scope.badLoginMessage = data.error_description;
			}
		)
	}
});