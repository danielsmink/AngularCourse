/**
 * Editable Item directive demonstration
 */

(function() {
  angular
    .module('editableItem', [])
    .constant('VERSION', '1.0')
    .run(function(VERSION, $rootScope) {
      $rootScope.version = VERSION;
    });
})();