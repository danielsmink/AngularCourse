'use strict';

/**
 * Controller to handle application logic uses an instagram service to call the instagram API
 */

angular.module('instagramSearcher')
  .controller('InstagramCtrl', function ($scope, InstagramSvc) {

    // Init default values
    $scope.images = null;
    $scope.message = null;
    $scope.tag = null;


    //Form validation
    var validate = function() {
      if($scope.searchForm.$valid) {
        return true;
      } else {
        // Form doesn't validate show error message
        $scope.message = 'Please fill in the search field';

        return false;
      }
    };

    $scope.findImages = function findImages () {
      //Validate form
      if(validate()) {

        // Set value to tag variable so we can reset $scope.tag
        var tag = $scope.tag;
        $scope.tag = null;

        // Show the user the search is being performed
        $scope.message = 'Searching Instagram for: "' + tag + '"';

        InstagramSvc.fetchImages(tag)
          .success(function (results) {
            // Check if we had a successful call to the instagram API
            if(results.meta.code === 200) {
              // Check if we actually found some images
              if (results.data.length > 0) {
                $scope.results = results.data;
                $scope.message = 'We found ' + results.data.length + ' results tagged with "' + tag + '"';
              } else {
                $scope.message = 'Sorry, your search returned no results.';
              }
            } else {
              // API reported an error show error to the user
              $scope.message = 'Oops, you have encountered an error: ' + results.meta.error_message;
            }
          })
          // Promise failed return error message
          .error(function () {
            $scope.message = 'Oops, you have encountered an error.';
          });
      }
    };
  });