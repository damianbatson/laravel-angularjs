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
         templateUrl: 'js/views/site/index.php',
         controller: 'mainCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'js/views/auth/login.php',
         controller: 'authCtrl'
      });

      $routeProvider.when('/register', {
         templateUrl: 'js/views/auth/register.php',
         controller: 'authCtrl'
      });
  
       $routeProvider.when('/admin', {
         // authRequired: true,
         templateUrl: 'js/views/admin/index.php',
         controller: 'adminCtrl'
      });

       $routeProvider.when('projects', {
         // authRequired: true,
         templateUrl: 'js/views/projects/index.php',
         controller: 'projectsCtrl'
      });


  }]);

myApp.factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
    return {
        response: function(response){
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
                console.log("Response Error 401",rejection);
                $location.path('/login').search('returnTo', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}]);
myApp.config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}]);
