var myApp = angular.module('myApp', ['ui.router'])

myApp.config(function($stateProvider) {
    $stateProvider
        .state('home', { 
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'templates/projects.html',
            controller: 'ProjectsController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
})

myApp.controller('HomeController', function($scope) {
    Papa.parse("proj.csv", {
        download: true,
        header: true,
        complete: function(projects) {
            $scope.projects = projects.data;
        }
    })
})

myApp.controller('AboutController', function($scope) {
    Papa.parse("proj.csv", {
        download: true,
        header: true,
        complete: function(projects) {
            $scope.projects = projects.data;
        }
    })
})

myApp.controller('ProjectsController', function($scope) {
    Papa.parse("proj.csv", {
        download: true,
        header: true,
        complete: function(projects) {
            $scope.projects = projects.data;
        }
    })
})

myApp.controller('ContactController', function($scope) {
    Papa.parse("proj.csv", {
        download: true,
        header: true,
        complete: function(projects) {
            $scope.projects = projects.data;
        }
    })
})

// for sidebar menu
$( document ).ready(function(){
    $(".button-collapse").sideNav();
});