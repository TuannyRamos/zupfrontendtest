angular.module("inspireIt").factory("dribbbleAPIService", function ($http, $rootScope) {
	
	var service = {};
	var ContextAPI = 'https://api.dribbble.com/v1/'

	//Header configuration
	var _configHeaders = function () {

		$http.defaults.headers.common['Authorization'] = 'Bearer 9b4920bf94f04fd11758057110fcc732ec0e8e385627896060efeeb987180efc';
		$http.defaults.headers.common['Content-Type'] = 'application/json';


	};

	service.getShots = function () {

		_configHeaders();
		return $http.get(ContextAPI+"shots");

	};

	service.getShotsByType = function (shotType) {

		_configHeaders();
		return $http.get(ContextAPI+"shots",{params:{"list": shotType}});

	};

	service.getSpecificShot = function (shotId) {
		
		_configHeaders();
		return $http.get(ContextAPI+"shots/"+shotId,'');

	};

	return service;

});