'use strict';

/**
* Simple service to care of calls to Instagram
*/

angular.module('instagramSearcher')
  .factory('InstagramSvc', function ($http) {
    return {
      fetchImages: function (tag) {

        // return Promise
        return $http(
          {
            method: 'JSONP',
            url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
            // Set config for the JSONP call
            'params': {
              'callback': 'JSON_CALLBACK',
              'client_id': 'a90279b288d5455d8230b396492d1768'
            }
          }
        );
      }
    };
  });