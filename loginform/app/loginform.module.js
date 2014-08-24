/**
 * Login form Angular Module to demonstrate directives
 */

(function() {
  angular
    .module('loginForm', [])
    .constant('VERSION', '1.0')
    .run(function(VERSION, $rootScope) {
      $rootScope.version = VERSION;
    });
})();