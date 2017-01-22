(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService']
function MyInfoController(SignUpService) {
  myInfoCtrl = this;
  myInfoCtrl.info = SignUpService.getInfo();
  myInfoCtrl.item = SignUpService.getItem();
  myInfoCtrl.isEmpty = angular.equals(myInfoCtrl.info, {});
}

})();
