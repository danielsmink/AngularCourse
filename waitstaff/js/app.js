var INTEGER_REGEXP = /^\-?\d+$/,
    FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;

angular.module('waitstaff', [])
    .constant('VERSION', '1.0')
    .run(function(VERSION, $rootScope){
        $rootScope.version = VERSION;
    })
    .controller('waitstaffController', function($scope){

        //Initialize some values
        $scope.errorMessage = false;
        $scope.formValid = false;

        $scope.chargeSubtotal = 0;
        $scope.chargeTip = 0;
        $scope.chargeTotal = 0;
        $scope.tipTotal = 0;
        $scope.mealCount = 0;
        $scope.avgTip = 0;

        //Form validation and value handling
        $scope.validate = function() {
            //Form is valid so we calculate all the values for the customer charge
            if($scope.mealForm.$valid) {
                $scope.chargeSubtotal = $scope.meal.baseprice * (1 + $scope.meal.taxrate / 100);
                $scope.chargeTip = $scope.chargeSubtotal * ($scope.meal.tippercentage / 100);
                $scope.chargeTotal = $scope.chargeSubtotal + $scope.chargeTip;

                // Set totals
                $scope.tipTotal = $scope.tipTotal + $scope.chargeTip;
                $scope.mealCount = $scope.mealCount + 1;
                $scope.avgTip = $scope.tipTotal / $scope.mealCount;

                // Reset the meal form
                $scope.meal = null;
            } else {
                $scope.errorMessage = 'Please fill in all the fields';
            }
        };

        //Meal form reset
        $scope.cancelMeal = function() {
            $scope.formValid = false;
            $scope.errorMessage = false;
            $scope.meal = null;
        };

        //Application reset
        $scope.resetApp = function() {
            $scope.formValid = false;
            $scope.errorMessage = false;
            $scope.meal = null;
            $scope.chargeSubtotal = 0;
            $scope.chargeTip = 0;
            $scope.chargeTotal = 0;
            $scope.tipTotal = 0;
            $scope.mealCount = 0;
            $scope.avgTip = 0;
        };
    })
    // Directive to validate integers shamelessly copied from the AnuglarJS documentation
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
    })
    // Directive to validate floats shamelessly copied from the AnuglarJS documentation
    .directive('smartFloat', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
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