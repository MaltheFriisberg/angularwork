/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").controller("topLevelController",
    function($scope, $http) { //injecting scope and http
        console.log("Hello from top level controller");
        //initialize variable empty array
        var dataToSave = {};
        $http.(
        {
            Method: "GET",
            url:"http://angularkea1.azurewebsites.net/api/internships/getall",
            //data: dataToSave,
            //data: $scope.visit
        }).success(function(data) {
            $scope.internshipVisits = data;
        });

    }
);