/**
 * Created by christiankirschberg on 29/09/15.
 */

angular.module("internship").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("all-internships");


        $stateProvider.state("all-internships", {
            url: "/all-internships",
            templateUrl: "partials/all-internships.html",
            controller: "allInternshipsController"
        })
                .state("all-internships.Subview1", {
                url: "/Subview1",
                templateUrl : "partials/Subview1.html"
            })
                .state("all-internships.Subview2", {
                url: "/Subview2",
                templateUrl: "partials/Subview2.html"

        });

        $stateProvider.state("new-internship", {
            url: "/new-internship",
            templateUrl: "partials/form-input.html",
            controller: "internshipDataEntryController",
            params: { internship: null }, //passing a variable
            //params: { internship: null}
        });
});