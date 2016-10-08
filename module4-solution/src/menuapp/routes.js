(function () {
  'use strict';

  angular.module('MenuApp').config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouterConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      template: '<a ui-sref="categories">Welcome to our Restaurant</a>'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/menuapp/items.template.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
  }
})();
