(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = '';
    $scope.items = '';

    $scope.check = function () {
      if($scope.items) {
        if($scope.items.split(',').length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      } else {
        $scope.message = 'Please enter data first';
      }
    }
  }
})();
