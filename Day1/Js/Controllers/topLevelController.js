/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").controller("topLevelController",
    function($scope, $http, $resource) {
        console.log("Hello from top level controller");
        //var dataToSave = ...
        //binding the (injected) respurce to our rest url
        //https://docs.angularjs.org/api/ngResource/service/$resource

        $scope.internshipResource = $resource("http://angularkea.azurewebsites.net/api/internships/:id",

            {id: "@id"}, {update: {method: "PUT"}});
        //binding the scope array
        $scope.internshipVisits = $scope.internshipResource.query();
        $scope.$parent.intershipVisits = $scope.internshipVisits;
        /*
        $http(
            {
                method: "GET",
                //url:"/api/internships/getall",
                url:"http://angularkea1.azurewebsites.net/api/internships/getall",
                //data: dataToSave
                //data: $scope.visit
            }).success(function(data) {
                $scope.internshipVisits = data;
            }).error(function() {
                alert("error");
            });*/

        console.log("Hello there");


    }
);