(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://og-angular-module-5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
