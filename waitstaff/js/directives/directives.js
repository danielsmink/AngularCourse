'use strict';

angular.module('waitstaff')
  // Directive to validate floats shamelessly copied from the AnuglarJS documentation
  .directive('smartFloat', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
        ctrl.$parsers.unshift(function(viewValue) {
          if (FLOAT_REGEXP.test(viewValue)) {
            ctrl.$setValidity('float', true);
            return parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('float', false);
            return undefined;
          }
        });
      }
    };
  });