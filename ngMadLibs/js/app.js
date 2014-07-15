var INTEGER_REGEXP = /^\-?\d+$/;

angular.module('madLibs', ['ngAnimate'])
    .constant('VERSION', '1.3')
    .run(function(VERSION, $rootScope, $templateCache){
        $rootScope.version = VERSION;
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        });
    })
    .controller('madLibsController', function($scope){

        //Initialize errormessage value
        $scope.errorMessage = false;
        $scope.formValid = false;

        //Form validation
        $scope.validate = function() {
            if($scope.myForm.$valid) {
                $scope.formValid = true;
            } else {
                $scope.errorMessage = 'Please fill in all the fields';
            }
        };

        //Form reset
        $scope.resetForm = function() {
            $scope.formValid = false;
            $scope.errorMessage = false;
            $scope.input = null;
        };
    })
    .directive('integer', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (INTEGER_REGEXP.test(viewValue)) {
                        // it is valid
                        ctrl.$setValidity('integer', true);
                        return viewValue;
                    } else {
                        // it is invalid, return undefined (no model update)
                        ctrl.$setValidity('integer', false);
                        return undefined;
                    }
                });
            }
        };
    });