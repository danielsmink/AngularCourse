var INTEGER_REGEXP = /^\-?\d+$/;

angular.module('waitstaff', [])
    .constant('VERSION', '1.0')
    .run(function(VERSION, $rootScope){
        $rootScope.version = VERSION;
    })
    .controller('waitstaffController', function($scope){

        //Initialize errormessage value
        $scope.errorMessage = false;
        $scope.formValid = false;

        //Form validation
        $scope.validate = function() {
            if($scope.mealForm.$valid) {
                $scope.formValid = true;
            } else {
                $scope.errorMessage = 'Please fill in all the fields';
            }
        };

        //Form reset
        $scope.cancelMeal = function() {
            $scope.formValid = false;
            $scope.errorMessage = false;
            $scope.meal = null;
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