'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('step', function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        backgroundColor: '@',
        canAddNew: '@'
      },
      replace: true,
      templateUrl: 'step.html',

      link: function(scope, element, attrs){
        scope.items = [];

        scope.$parent.addStep(scope);
        scope.$watch('backgroundColor', function(value){
          element.css("background-color", scope.backgroundColor);
          console.log(element.css("background-color"));
        });

        scope.newItemKeyPressed = function(){
          if(scope.newItemText){
            scope.items.push({name: scope.newItemText});
            scope.newItemText = '';
          }
        }
      }
    };
  })
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
  });
