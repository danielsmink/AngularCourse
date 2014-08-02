'use strict';

/**
 * Waitstaff application
 */
angular.module('waitstaff', ['ngRoute'])
  .constant('VERSION', '1.1')
  .run(function(VERSION, $rootScope, $templateCache){
    $rootScope.version = VERSION;
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
    });
  })
  // Configure routes
  .config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : './js/waitstaff/home.html'
    })
    .when('/new-meal', {
      templateUrl : './js/waitstaff-meal/new-meal.html'
    })
    .when('/my-earnings', {
      templateUrl : './js/waitstaff-earnings/my-earnings.html'
    })
    .when('/error', {
      template : '<p>Error Page Not Found</p>'
    })
    .otherwise({
      redirectTo : '/error'
    });
  });