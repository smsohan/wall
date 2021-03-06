'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wall', {templateUrl: 'wall.html', controller: 'WallController'});
    $routeProvider.otherwise({redirectTo: '/wall'});
  }]);
