angular.module("inspireIt").config(function ($httpProvider) {
	$httpProvider.interceptors.push("loadingInterceptor");
});