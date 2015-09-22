/**
 * Created by Mal on 22-09-2015.
 */
var app = angular.module("internship");

app.controller("internshipDataEntryController",
    function($scope) {
    $scope.visit = {};

    $scope.saveVisit = function(){
            if($scope.visitForm.$valid) {
                alert("YEs");
            } else {
                alert("Invalid");
            }
            console.log('din frank');

            //console.log($scope.visit.initials);
        }
});
