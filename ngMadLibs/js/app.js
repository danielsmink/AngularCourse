angular.module('madLibs', [])
    .controller('madLibsController', function($scope){
        $scope.input = {
            femaleName:"female name",
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