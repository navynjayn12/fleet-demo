angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'CreateController'
		})

		.when('/update', {
			templateUrl: 'views/update.html',
			controller: 'UpdateController'	
		});

	$locationProvider.html5Mode(true);

}]);