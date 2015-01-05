adsModule.factory('mainData', function($http, constants, authHeaders){
	function getAllAds(success, error, startPage, pageSize, categoryId, townId){
		pageSize = pageSize || constants.defaultPageSize;
		startPage = startPage || constants.defaultStartPage;

		var url = constants.baseUrl + 'ads?pagesize=' + pageSize + '&startpage=' + startPage;

		if(categoryId && categoryId !== 0){
			url += '&categoryid=' + categoryId;
		}

		if(townId && townId !== 0) {
			url += '&townid=' + townId;
		}

		$http({
			method: 'GET',
			url: url
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAdsByLoggedUser(success, error, startPage, pageSize, categoryId, townId) {
		pageSize = pageSize || constants.defaultPageSize;
		startPage = startPage || constants.defaultStartPage;

		var url = constants.baseUrl + 'ads?pagesize=' + pageSize + '&startpage=' + startPage;

		if(categoryId && categoryId !== 0){
			url += '&categoryid=' + categoryId;
		}

		if(townId && townId !== 0) {
			url += '&townid=' + townId;
		}

		$http({
			method: 'GET',
			url: url
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAllTowns(success, error){
		$http({
			method: 'GET',
			url: constants.baseUrl + 'towns',
			headers: authHeaders
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAllCategories(success, error){
		$http({
			method: 'GET',
			url: constants.baseUrl + 'categories'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function login(username, password, success, error) {
		$http({
			method: 'POST',
			url: constants.baseUrl + 'user/login',
			data: {username: username, password: password}
		})
		.success(function (data, status, headers, config){
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config){
			error(data, status, headers(), config);
		});
	}

	function registerUser(data, success, error) {
		$http({
			method: 'POST',
			url: constants.baseUrl + 'user/register',
			data: data
		})
		.success(function (data, status, headers, config){
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config){
			error(data, status, headers(), config);
		});
	}

	function getLoggedUserData(success, error) {
		console.log(authHeaders);
		$http({
			method: 'GET',
			url: constants.baseUrl + 'user/profile',
			headers: authHeaders
		})
		.success(function (data, status, headers, config){
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config){
			error(data, status, headers(), config);
		});
	}

	return{
		getAllAds: getAllAds,
		getAllTowns: getAllTowns,
		getAllCategories: getAllCategories,
		registerUser: registerUser,
		login: login,
		getLoggedUserData: getLoggedUserData,
		getAdsByLoggedUser: getAdsByLoggedUser
	}
})