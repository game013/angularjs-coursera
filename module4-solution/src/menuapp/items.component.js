(function () {
  'use strict';

  var itemsComponent = {
    bindings: {
      menus: '<'
    },
    templateUrl: 'src/menuapp/items.component.template.html'
  };

  angular.module('MenuApp')
  .component('items', itemsComponent);
})();
