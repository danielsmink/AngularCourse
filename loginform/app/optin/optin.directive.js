/**
 * A directive to render a login form
 */

(function (){
  angular
    .module('loginForm')
    .directive('optIn', optIn);

  function optIn () {
    var directive = {
      transclude: true,
      templateUrl: './js/partials/optin/optin.template.html',
      restrict: 'E'
    };

    return directive;
  }
})();