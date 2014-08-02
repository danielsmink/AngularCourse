'use strict';

/**
 * Waitstaff application
 */
angular.module('waitstaff', ['ngRoute', 'ngAnimate'])
  .constant('VERSION', '1.2')
  .run(function(VERSION, $location, $timeout, $rootScope, $templateCache){
    $rootScope.version = VERSION;
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
    });
    $rootScope.$on('$routeChangeError', function() {
      $location.path('/error');
    });
    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
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