'use strict';

app.factory('adsService', function ($resource, baseServiceUrl) {
	var adsResource = $resource(
		baseServiceUrl + 'ads',
		null,
		{
			'getAll': {
				method:'GET'
			}
		}
	);

	return {
		getAds: function(params, success, error) {
			return adsResource.getAll(params, success, error);
		}
	}
});