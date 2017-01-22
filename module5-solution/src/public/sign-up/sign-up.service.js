(function () {

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.setInfo = function (info, item) {
    service.info = angular.copy(info, {});
    service.item = angular.copy(item, {});
  };

  service.getInfo = function () {
    return angular.copy(service.info, {});
  };

  service.getItem = function () {
    return angular.copy(service.item, {});
  };

}

})();
