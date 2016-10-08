(function () {
  'use strict';

  var categoriesComponent = {
    bindings: {
      items: '<'
    },
    templateUrl: 'src/menuapp/categories.component.template.html'
  };

  angular.module('MenuApp')
  .component('categories', categoriesComponent);
})();
