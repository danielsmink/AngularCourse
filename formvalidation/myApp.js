angular.module('myApp', [])
    .controller('FormCtrl', ['$scope', function($scope) {
        $scope.submit = function() {
            if($scope.myForm.$valid) {
                console.log('The form is valid');
            } else {
                console.log('The form is invalid');
            }
        };
    }]);