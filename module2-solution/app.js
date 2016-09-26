(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyItems = [
      {
        'name': 'Cookies',
        'quantity': 10
      },
      {
        'name': 'Breads',
        'quantity': 3
      },
      {
        'name': 'Grapes',
        'quantity': 30
      },
      {
        'name': 'T-Shirt',
        'quantity': 1
      },
      {
        'name': 'Games',
        'quantity': 3
      }
    ];
    service.boughtItems = [];

    service.buyItem = function (itemIndex) {
      var removedItem = service.toBuyItems.splice(itemIndex, 1);
      service.boughtItems.push(removedItem[0]);
    };

    service.getToBuyItems = function() {
      return service.toBuyItems;
    };

    service.getBoughtItems = function() {
      return service.boughtItems;
    };
  }

})();
