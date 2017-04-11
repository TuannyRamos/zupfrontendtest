angular.module("inspireIt").config(function ($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl: "view/home.html",
		controller: "homeController"
	});
	$routeProvider.when("/details/:id", {
		templateUrl: "view/details.html",
		controller: "detailsController",
		resolve: {
			selectedShot: function ($route) {
				return $route.current.params.id;
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/home"});
});