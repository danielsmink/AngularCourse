'use strict';

/**
 * Waitstaff service to calculate earnings
 */
angular.module('waitstaff')
  .service('WaitstaffSvc', function () {

    // Init earnings
    this.earnings = {
      tipTotal : 0,
      mealCount : 0,
      avgTip : 0
    };

    // Retrieve earnings
    this.getEarnings = function() {
      return this.earnings;
    };

    // Update earnings with the values from meal
    this.updateEarnings = function(meal) {
      this.earnings.tipTotal = this.earnings.tipTotal + meal.chargeTip;
      this.earnings.mealCount++;
      this.earnings.avgTip = this.earnings.tipTotal / this.earnings.mealCount;
    };

    // Reset earnings
    this.resetEarnings = function() {
      this.earnings = {
        tipTotal : 0,
        mealCount : 0,
        avgTip : 0
      };
    };
  });