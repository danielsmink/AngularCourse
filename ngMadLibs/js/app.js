angular.module('madLibs', [])
    .constant('VERSION', '1.1')
    .run(function(VERSION, $rootScope){
        $rootScope.version = VERSION;
    })
    .controller('madLibsController', function($scope){
        $scope.input = {
            gender:"female",
            femaleName:"name",
            jobTitle:"job title",
            tediousTask:"tedious task",
            dirtyTask:"dirty task",
            celebrity:"celebrity",
            uselessSkill:"useless skill",
            obnoxiuousCelbertity:"obnoxious celebrity",
            hugeNumber:"huge number",
            adjective:"adjective"
        }
    })