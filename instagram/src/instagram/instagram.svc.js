'use strict';

/**
* Simple service to care of calls to Instagram
*/

angular.module('instagramSearcher')
  .factory('InstagramSvc', function ($http) {
    return {
      fetchImages: function (tag) {

        // Set config for the JSONP call
        var config = {
            'params': {
              'callback': 'JSON_CALLBACK',
              'client_id': 'a90279b288d5455d8230b396492d1768'
            }
          };

        // return Promise
        return $http.jsonp('https://api.instagram.com/v1/tags/' + tag + '/media/recent', config);
      }
    };
  });