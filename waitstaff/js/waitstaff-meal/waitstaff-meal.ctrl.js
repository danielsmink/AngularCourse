'use strict';

/**
 * Wait staff controller to handle to meal form
 */
angular.module('waitstaff')
  .controller('waitstaffController', function($scope, WaitstaffSvc){

    //Initialize some values
    $scope.errorMessage = false;
    $scope.formValid = false;

    $scope.meal = {
      chargeSubtotal : 0,
      chargeTip : 0,
      chargeTotal : 0
    };

    //Form validation and value handling
    $scope.validate = function() {
      //Form is valid so we calculate all the values for the customer charge
      console.log($scope.mealForm.$error);
      if($scope.mealForm.$valid) {
        $scope.meal.chargeSubtotal = $scope.meal.baseprice * (1 + $scope.meal.taxrate / 100);
        $scope.meal.chargeTip = $scope.meal.chargeSubtotal * ($scope.meal.tippercentage / 100);
        $scope.meal.chargeTotal = $scope.meal.chargeSubtotal + $scope.meal.chargeTip;

        // Update earnings via service
        WaitstaffSvc.updateEarnings($scope.meal);

        // Reset the meal form
        $scope.meal.baseprice = null;
        $scope.meal.taxrate = null;
        $scope.meal.tippercentage = null;
      } else {
        $scope.errorMessage = 'Please fill in all the fields';
      }
    };

    //Meal form reset
    $scope.cancelMeal = function() {
      $scope.formValid = false;
      $scope.errorMessage = false;
      // Reset the meal form
      $scope.meal.baseprice = null;
      $scope.meal.taxrate = null;
      $scope.meal.tippercentage = null;
    };
  });