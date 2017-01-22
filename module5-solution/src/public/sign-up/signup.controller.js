(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$scope', 'SignUpService']

function SignUpController(MenuService, $scope, SignUpService) {
  var signUpCtrl = this;
  signUpCtrl.menuNotExists = false;
  signUpCtrl.saved = false;

  signUpCtrl.submit = function () {
    signUpCtrl.menuNotExists = false;
    MenuService.getShortName(signUpCtrl.form.favoriteDish).then(function (data) {
      SignUpService.setInfo(signUpCtrl.form, data);
      signUpCtrl.form = angular.copy({});
      $scope.signUpForm.$setPristine();
      signUpCtrl.saved = true;
    }, function() {
      signUpCtrl.menuNotExists = true;
    });
    signUpCtrl.completed = true;
  };
}

})();
