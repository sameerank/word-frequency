(function () {

  'use strict';

  angular.module('WordfrequencyApp', [])

  .controller('WordfrequencyController', ['$scope', '$log', '$http',
    function($scope, $log, $http) {
    $scope.getResults = function() {
      $log.log("test");

      var userInput = $scope.url;

      $http.post('/start', {"url": userInput}).
      success(function (results) {
        $log.log(results);
      }).
      error(function (error) {
        $log.log(error);
      });
    };
  }

  ]);

}());
