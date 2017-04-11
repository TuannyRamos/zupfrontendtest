angular.module("inspireIt").controller("homeController", function ($scope, dribbbleAPIService) {
	
	dribbbleAPIService.getShots().success(function (data) {

		$scope.shotList = data;

	}).error(function (data, status) {
		alert("Não foi possivel carregar os shots!");
	});

	$scope.getShotsByType = function(shotType){

		dribbbleAPIService.getShotsByType(shotType).success(function (data) {

			$scope.shotList = data;

		}).error(function (data, status) {
			alert("Não foi possivel carregar os shots!");
		});

	};
	
});