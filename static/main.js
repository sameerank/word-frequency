(function () {

  'use strict';

  angular.module('WordfrequencyApp', [])

  .controller('WordfrequencyController', ['$scope', '$log', '$http', '$timeout',
    function($scope, $log, $http, $timeout) {
      $scope.submitButtonText = 'Submit';
      $scope.loading = false;
      $scope.urlerror = false;

      $scope.getResults = function() {

        var userInput = $scope.url;

        $http.post('/start', {"url": userInput}).
        success(function (results) {
          $scope.urlerror = false;
          getWordFrequency(results);
          $scope.wordcounts = null;
          $scope.loading = true;
          $scope.submitButtonText = "Loading..."
        }).
        error(function (error) {
          $log.log(error);
        });
      };

      function getWordFrequency(jobID) {
        var timeout = "";

        var poller = function () {
          $http.get('/results/' + jobID).
          success(function (data, status, headers, config) {
            if (status === 200) {
              $scope.loading = false;
              $scope.submitButtonText = "Submit";
              $scope.wordcounts = data;
              $timeout.cancel(timeout);
              return false
            }
            timeout = $timeout(poller, 2000);
          }).
          error(function (error) {
            $scope.loading = false;
            $scope.submitButtonText = "Submit";
            $scope.urlerror = true;
          });
        };

        poller();
      }
    }

  ]);

}());
