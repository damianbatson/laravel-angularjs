angular.module('projectsService', ['ngRoute'])

	.factory('Projects', function($http) {

		return {
			get : function() {
				return $http.get('api/projects');
				console.log('connect');
			},
			getinfo : function() {
				return $http.get('/admin');
				console.log('connect');
			},
			show : function(id) {
				return $http.get('api/projects/' + id);
			},
			save : function(projectData) {
				return $http({
					method: 'POST',
					url: 'api/projects',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(projectData)
				});
			},
			destroy : function(id) {
				return $http.delete('api/projects/' + id);
			}
		}

	})

		.factory('Users', function($http) {

		return {
			get : function() {
				return $http.get('api/projects');
				console.log('connect');
			},
			show : function(id) {
				return $http.get('api/projects/' + id);
			},
			login : function(authCredentials) {
				return $http({
					method: 'POST',
					url: 'login',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(authCredentials)
				});
			},
			register : function(authData) {
				return $http({
					method: 'POST',
					url: 'register',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(authData)
				});
			},
			admin : function() {
				return $http.get('api/admin');
				console.log('connect');
			},
			destroy : function(id) {
				return $http.delete('api/projects/' + id);
			}
		}

	})

.factory('SessionService',function(){
return{
get:function(key){
return sessionStorage.getItem(key);
},
set:function(key,val){
return sessionStorage.setItem(key,val);
},
unset:function(key){
return sessionStorage.removeItem(key);
}
}
});