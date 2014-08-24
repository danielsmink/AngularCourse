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
      restrict: 'A',
      scope: true,
      link: function(scope, element) {
        var editableItem = element.find('div')[0];
        scope.editItem = {
          // Make item editable and set focus.
          edit: function() {
            editableItem.setAttribute('contenteditable', 'true');
            editableItem.focus();
            scope.editItem.editable = true;
          },
          // Save item
          save: function() {
            editableItem.setAttribute('contenteditable', 'false');
            scope.editItem.editable = false;
          },
          // Set initial status
          status: 'saved'
        };
      }
    };

    return directive;
  }
})();