'use strict'

app.factory('townsService', function ($resource, baseServiceUrl) {
	var townsService = $resource(baseServiceUrl + 'towns');

	return {
		getTowns: function(success, error) {
			return townsService.query(success, error);
		}
	}
});