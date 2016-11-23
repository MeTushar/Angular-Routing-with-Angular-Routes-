var app = angular.module("myApp", ['ngRoute'])
app.controller('mainController', ['$scope', function($scope){
	$scope.first = "This is just home page";
}]);
app.controller('aboutController', ['$scope', function($scope){
	$scope.first = "This is just about page";
}]);
app.controller('contactController', ['$scope', function($scope){
	$scope.first = "This is just contact page";
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', 
		{
			templateUrl : 'pages/home.html',
			controller: 'mainController'
		}
	)
	.when('/about',
		{
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		}
	)
	.when('/contact',
		{
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		}
	);
}]);