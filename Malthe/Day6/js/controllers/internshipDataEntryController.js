var app = angular.module("internship");

app.controller("internshipDataEntryController",
    function($scope, $state, $stateParams) {
        $scope.visit = $stateParams.internship;

        console.log($stateParams.internship);

        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid) {

                if("it is new") {
                    $scope.visit.id = $scope.$parent.internshipVisits.length + 1; //simply add a new field to the object
                    $scope.$parent.
                        internshipVisits.push($scope.visit); //push to the array
                } else { //editing
                    //updates the existing object
                    var index = $scope.$parent.internshipVisits.indexOf($scope.visit.id);
                    $scope.$parent.internshipVisits[index] = $scope.visit;
                }
                $state.go("all-internships");

                //alert("Yes!");
                //Send a request to the server to save data
            }
            else {
                //display error messages
            }

        };
});