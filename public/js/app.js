
var app =  angular.module('poolApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',   function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix = '!';

        $routeProvider.
            when('/admin', {
                templateUrl: 'js/views/admin.html',
                controller: 'adminController'
            }).
            when('/view', {
                templateUrl: 'js/views/list.html',
                controller: 'poolController'
            }).
            when('/auth/login', {
                templateUrl: 'js/views/auth/login.html',
                controller: 'loginController'
            }).
            otherwise({
                redirectTo: '/view'
            });
    }]);

app.factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
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
app.config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}]);