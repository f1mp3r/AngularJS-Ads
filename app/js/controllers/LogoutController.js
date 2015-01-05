adsModule.controller('LogoutController', function ($scope, mainData, authHeaders) {
	$scope.userIsLoggedIn = false;

	if (sessionStorage['access_token']) {
		delete sessionStorage['access_token'];
		authHeaders = {};
		$scope.logoutText = 'You have successfully logged out!';
	} else {
		$scope.logoutText = 'You were not in your profile in first place.';
	}
});