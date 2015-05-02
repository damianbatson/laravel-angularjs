angular.module('authService', ['ngRoute'])

	.factory('Users', function($http) {

		return {
			get : function() {
				return $http.get('/api/projects');
				console.log('connect');
			},
			show : function(id) {
				return $http.get('/api/projects/' + id);
			},
			// login : function(authData) {
				return $http({
					method: 'POST',
					url: '/auth/',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(authData)
				});
			},
			destroy : function(id) {
				return $http.delete('/api/projects/' + id);
			}
		}

	});