var app = angular.module('UIApp' , ['ngRoute' , 'ngMaterial'])
app.config(function($mdIconProvider , $mdThemingProvider , $mdAriaProvider){
		$mdThemingProvider.theme('default')
		.primaryPalette('green')
		.accentPalette('red');
		$mdAriaProvider.disableWarnings();
	})

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/dashboard.html",
        controller: 'dashboardctrl',
    })
    .otherwise({
    	redirectTo : '/'
    });
});

app.controller('dashboardctrl', function($scope, $http , $location ,$rootScope,$mdSidenav) {
	$scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});