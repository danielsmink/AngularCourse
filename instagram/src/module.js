'use strict';

/**
 * Simple Angular instagramSearcher module
 *
 * Version 1.0
 */

angular.module('instagramSearcher', ['ngAnimate'])
  // Set version
  .constant('VERSION', '1.0')
  .run(function(VERSION, $rootScope){
    $rootScope.version = VERSION;
  });