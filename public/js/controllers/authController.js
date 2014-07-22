	// public/js/controllers/mainCtrl.js
angular.module('authController', ['ngRoute'])

	// inject the Comment service into our controller
	.controller('authCtrl', function($scope, $http, Users) {
		// object to hold all the data for the new comment form
		$scope.authData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = false;

		// get all the comments first and bind it to the $scope.comments object
		// use the function we created in our service
		// GET ALL COMMENTS ====================================================
		Users.get()
			.success(function(getData) {
				$scope.users = getData;
				$scope.loading = false;
			})
			.error(function(data){
				console.log(data);

			});

		// function to handle submitting the form
		// SAVE A COMMENT ======================================================
		$scope.login = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Users.login($scope.authData)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Users.get()
						.success(function(getData) {
							$scope.users = getData;
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
							$scope.users = getData;
							$scope.loading = false;
						});

				}).error(function(){
					console.log();
				});
		};

	});