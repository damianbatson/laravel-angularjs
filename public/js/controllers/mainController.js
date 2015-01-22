	// public/js/controllers/mainCtrl.js
angular.module('mainController', ['ngRoute'])

	// inject the Comment service into our controller
	.controller('mainCtrl', function($scope, $http, Projects) {
		// object to hold all the data for the new comment form
		$scope.projectData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = false;

		// get all the comments first and bind it to the $scope.comments object
		// use the function we created in our service
		// GET ALL COMMENTS ====================================================
		Projects.get()
			.success(function(getData) {
				$scope.projects = getData;
				$scope.loading = false;
			})
			.error(function(data){
				console.log(data);

			});

		// function to handle submitting the form
		// SAVE A COMMENT ======================================================
		$scope.submitComment = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Projects.save($scope.projectData)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Projects.get()
						.success(function(getData) {
							$scope.projects = getData;
							$scope.loading = false;
						});

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		// DELETE A COMMENT ====================================================
		$scope.deleteComment = function(id) {
			$scope.loading = true; 

			// use the function we created in our service
			Projects.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Projects.get()
						.success(function(getData) {
							$scope.projects = getData;
							$scope.loading = false;
						});

				}).error(function(){
					console.log();
				});
		};

	})

	.controller('authCtrl', function($scope, $http, $location, $rootScope, Users, Projects, SessionService) {
		// object to hold all the data for the new comment form
		$scope.projectData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = false;

		// get all the comments first and bind it to the $scope.comments object
		// use the function we created in our service
		// GET ALL COMMENTS ====================================================
		Projects.get()
			.success(function(getData) {
				$scope.projects = getData;
				$scope.loading = false;
			})
			.error(function(data){
				console.log(data);

			});

		// function to handle submitting the form
		// SAVE A COMMENT ======================================================
		$scope.login = function() {
			var success = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Users.login($scope.authCredentials)
				.success(function(data) {
					
					if(data){
					$location.path('/admin');
					// if (!$rootScope.$$phase) $rootScope.$apply();
					console.log(data);
				}

					// if successful, we'll need to refresh the comment list
					// Users.get()
					// 	.success(function(getData) {
					// 		$scope.users = getData;
					// 		$scope.loading = false;
					// 	});

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		// DELETE A COMMENT ====================================================
		$scope.register = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Users.register($scope.authData)
				.success(function(data) {
					$location.path('/login').replace();
					$scope.$apply();
					// if successful, we'll need to refresh the comment list
					// Users.get()
					// 	.success(function(getData) {
					// 		$scope.users = getData;
					// 		$scope.loading = false;
					// 	});

				})
				.error(function(data) {
					console.log(data);
				});
		};

	})

	.controller('adminCtrl', function($scope, $http, $location, $rootScope, Users) {
		// object to hold all the data for the new comment form
		$scope.adminData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = false;

		// get all the comments first and bind it to the $scope.comments object
		// use the function we created in our service
		// GET ALL COMMENTS ====================================================
		Users.admin()
			.success(function(getData) {
				$scope.users = getData;
				$scope.loading = false;
			})
			.error(function(data){
				console.log(data);

			});

		$scope.logout = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Users.logout($scope.authData)
				.success(function(data) {
					$location.path('/').replace();
					if (!$rootScope.$$phase) $rootScope.$apply();
					console.log(data);
					// if successful, we'll need to refresh the comment list
					// Users.get()
					// 	.success(function(getData) {
					// 		$scope.users = getData;
					// 		$scope.loading = false;
					// 	});

				})
				.error(function(data) {
					console.log(data);
				});
		};

	})

	.controller('projectsCtrl', function($scope, $http, $location, $rootScope, Projects) {
		// object to hold all the data for the new comment form
		$scope.projectData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = false;

		// get all the comments first and bind it to the $scope.comments object
		// use the function we created in our service
		// GET ALL COMMENTS ====================================================
		Projects.get()
			.success(function(getData) {
				$scope.projects = getData;
				$scope.loading = false;
			})
			.error(function(data){
				console.log(data);

			});

		// function to handle submitting the form
		// SAVE A COMMENT ======================================================
		$scope.submitComment = function(projectData) {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Projects.save($scope.projectData)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Projects.get()
						.success(function(getData) {
							$scope.projects = getData;
							$scope.loading = false;
						});
						$location.path('/').replace();
					if (!$rootScope.$$phase) $rootScope.$apply();
					console.log(data);

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		// DELETE A COMMENT ====================================================
		$scope.deleteComment = function(id) {
			$scope.loading = true; 

			// use the function we created in our service
			Projects.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Projects.get()
						.success(function(getData) {
							$scope.projects = getData;
							$scope.loading = false;
						});

				}).error(function(){
					console.log();
				});
		};

	})