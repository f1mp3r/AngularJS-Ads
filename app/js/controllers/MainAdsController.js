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

	mainData.getAllTowns(
		function success(data, status, headers, config){
			$scope.towns = data;
		}, 
		function error(){
			$log.error(data);
		},
		1
	);

	mainData.getAllCategories(
		function success(data, status, headers, config){
			$scope.categories = data;
		}, 
		function error(){
			$log.error(data);
		},
		1
	);

	$scope.isNotNull = function(variable) {
		return (variable === null);
	}

	$scope.loadAdsWithCategory = function(data) {
		console.log(data);
		var categoryId = data.category.id;
		sessionStorage['chosenCategory'] = categoryId;

		mainData.getAllAds(
			function success(data, status, headers, config){
				$scope.ads = data.ads;
			}, 
			function error(){
				console.log(data);
			},
			1,
			0,
			categoryId
		);
	}

	$scope.loadAdsByCategory = function(data) {
		var categoryId = data.category.id;
		// sessionStorage['chosenCategory'] = categoryId;

		mainData.getAllAds(
			function success(data, status, headers, config){
				$scope.ads = data.ads;
			}, 
			function error(){
				console.log(data);
			},
			1,
			null,
			categoryId
		);
	}

	$scope.loadAdsByTown = function(data) {
		var townId = data.town.id;
		// sessionStorage['chosenTown'] = townId;

		mainData.getAllAds(
			function success(data, status, headers, config){
				$scope.ads = data.ads;
			}, 
			function error(){
				console.log(data);
			},
			1,
			null,
			townId
		);
	}
})