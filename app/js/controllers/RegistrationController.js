adsModule.controller('RegistrationController', function ($scope, mainData, constants) {
	mainData.getAllTowns(
		function success(data, status, headers, config) {
			$scope.towns = data;
			$scope.constants = constants;
		},
		function error(data, status, headers, config) {
			$log.error(data);
		}
	);
	$scope.userIsRegistered = false;
	var newUser = {
		username: '',
		password: '',
		confirmPassword: '',
		name: '',
		email: '',
		phone: '',
		townId: ''
	};

	//TODO: validation in forms

	$scope.newUser = newUser;

	$scope.register = function() {
		console.log($scope.newUser);
		mainData.registerUser(
			$scope.newUser,
			function success(data, status, headers, config) {
				var access_token = data.access_token;
				sessionStorage['access_token'] = access_token;
				$scope.userIsRegistered = true;
				//todo: redirect
			},
			function error(data, status, headers, config) {
				$log.error(data);
			}
		);
	}
});