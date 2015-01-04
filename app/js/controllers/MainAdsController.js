adsModule.controller('MainAdsController', function ($scope, mainData, constants) {
	mainData.getAllAds(
		function success(data, status, headers, config){
			$scope.ads = data.ads;
			$scope.constants = constants;
			$scope.data = data;
		}, 
		function error(){
			$log.error(data);
		},
		1
	);

	$scope.isNotNull = function(variable) {
		return (variable === null);
	}
})