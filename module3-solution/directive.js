(function () {
  'use strict';

  angular.module('NarrowItDownApp')
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItemsTemplate.html',
      scope: {
        foundItems: '<',
        errorMessage: '@',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'directiveCtrl',
      bindToController: true
    };
    return ddo;
  }

  NarrowItDownDirectiveController.$inject = [];
  function NarrowItDownDirectiveController() {
    var directiveCtrl = this;
  }
})();
