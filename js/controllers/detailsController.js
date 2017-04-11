angular.module("inspireIt").controller("detailsController", function ($scope, selectedShot, dribbbleAPIService) {
	
	dribbbleAPIService.getSpecificShot(selectedShot).success(function (data) {

		$scope.shotDetail = data;

	}).error(function (data, status) {
		alert("Não foi possivel carregar os detalhes do shots!");
	});
	
});