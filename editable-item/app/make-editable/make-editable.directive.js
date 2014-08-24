/**
 * A directive to make html elements editable
 */

(function (){
  angular
    .module('editableItem')
    .directive('makeEditable', makeEditable);

  /* @ngInject */
  function makeEditable () {
    var directive = {
      transclude: true,
      templateUrl: './js/partials/make-editable/make-editable.template.html',
      restrict: 'A'
    };

    return directive;
  }
})();