'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('WallController', ['$scope', function($scope) {

    var steps = [];

    var setCssClasses = function(){
      var eachSize = steps.length ? (12 / steps.length) : 12;
      var cssClass = "col-md-" + Math.floor(eachSize);
      angular.forEach(steps, function(step, index){
        step.cssClass = cssClass;
      });
    };

    $scope.addStep = function(step){
      steps.push(step);
      setCssClasses();
    };

  }]);