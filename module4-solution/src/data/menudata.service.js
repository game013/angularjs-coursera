(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiUrl'];
  function MenuDataService($http, ApiUrl) {
    var service = this;

    service.getAllCategories = getAllCategories;
    service.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      return $http({url: (ApiUrl + '/categories.json')})
      .then(function (result) {
        return result.data;
      });
    };

    function getItemsForCategory(categoryShortName) {
      return $http({url: (ApiUrl + '/menu_items.json?category=' + categoryShortName)})
      .then(function (result) {
        return result.data;
      });
    };
  };
})();
