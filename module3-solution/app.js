(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .constant('ApiServer', 'https://davids-restaurant.herokuapp.com')
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.searchTerm = '';
    narrowCtrl.errorMessage = '';

    narrowCtrl.onNarrowDown = function () {
      narrowCtrl.errorMessage = '';
      var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
      promise.then(function (result) {
        if (result && result.length > 0 && narrowCtrl.searchTerm) {
          narrowCtrl.foundItems = result;
        } else {
          narrowCtrl.errorMessage = 'Nothing found';
          narrowCtrl.foundItems = [];
        }
      })
      .catch(function () {
        narrowCtrl.errorMessage = 'Nothing found';
        narrowCtrl.foundItems = [];
      });
    };

    narrowCtrl.onRemove = function (index) {
      narrowCtrl.foundItems.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiServer'];
  function MenuSearchService($http, ApiServer) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({url: (ApiServer + '/menu_items.json')})
      .then(function(result) {
        return result.data.menu_items.filter(function(element) {
          return element.description.toLowerCase().includes(searchTerm);
        });
      });
    };
  }
})();
