adsModule.controller('AuthenticationController', function ($scope, mainData, constants) {
	if (sessionStorage['access_token']) {
		$scope.userIsLoggedIn = true;
		$scope.userData = sessionStorage['userData'];
	} else {
		$scope.userIsLoggedIn = false;
	}
});