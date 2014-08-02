'use strict';

/**
 * Earnings controller
 */
angular.module('waitstaff')
  .controller('earningsController', function($scope, WaitstaffSvc){
    // Retrieve earnings from service
    $scope.earnings = WaitstaffSvc.getEarnings();

    // Reset earnings
    $scope.resetApp = function() {
      WaitstaffSvc.resetEarnings();
      $scope.earnings = WaitstaffSvc.getEarnings();
    };
  });