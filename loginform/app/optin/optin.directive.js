/**
 * A directive to render a login form
 */

(function (){
  angular
    .module('loginForm')
    .directive('optIn', optIn);

  /* @ngInject */
  function optIn () {
    var directive = {
      transclude: true,
      templateUrl: 'optin/optin.template.html',
      restrict: 'E'
    };

    return directive;
  }
})();