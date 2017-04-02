angular.module('mercatino', ['ngRoute', 'ui.bootstrap']).config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/mercatino', {
		templateUrl: 'views/mercatino.html'
	}).when('/regolamento', {
		templateUrl: 'views/regolamento.html'
	}).when('/prodotti', {
		templateUrl: 'views/prodotti.html'
	}).when('/admin', {
		templateUrl: 'views/admin.html'
	}).otherwise({
		redirectTo: '/mercatino'
	});

	$locationProvider.html5Mode(true);
}).controller('menuCtrl', function($scope) {
	var vm = this;
});
