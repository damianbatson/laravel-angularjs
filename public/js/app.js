'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['projectsService', 'mainController', 'ngRoute']);

   // double-check that the app has been configured
   myApp.run([ function() {
      
   //       // establish authentication
   //       $rootScope.auth = loginService.init('/login');
   //       //$rootScope.FBURL = FBURL;
      
   }])

   // configure views; note the authRequired parameter for authenticated pages
  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
      
      $routeProvider.when('/', {
         templateUrl: 'js/site/index.html',
         controller: 'mainCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'js/auth/login.html',
         controller: 'authCtrl'
      });

      $routeProvider.when('/register', {
         templateUrl: 'js/auth/register.php',
         controller: 'authCtrl'
      });
  
       $routeProvider.when('/admin', {
         // authRequired: true,
         templateUrl: 'admin/index.php',
         controller: 'adminCtrl'
      });

       $routeProvider.when('projects', {
         // authRequired: true,
         templateUrl: 'js/projects/index.html',
         controller: 'projectsCtrl'
      });


  }]);

  myApp.config(function($httpProvider){
        var interceptor = function($rootScope,$location,$q, FlashService){
        var success = function(response){
            return response
        };
        var error = function(response){
            if (response.status == 401){
                delete sessionStorage.authenticated
                $location.path('/')
                FlashService.show(response.data.flash)
            }
            return $q.reject(response)
        };
            return function(promise){
                return promise.then(success, error)
            };
        };
        $httpProvider.responseInterceptors.push(interceptor)
    });

  myApp.factory("FlashService", function($rootScope) {
  return {
    show: function(message) {
      $rootScope.flash = message;
    },
    clear: function() {
      $rootScope.flash = "";
    }
  }
});
