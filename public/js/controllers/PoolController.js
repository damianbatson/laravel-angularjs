app.controller('poolController', function($scope, $http) {

	$scope.pools = [];
	$http.get('/api/pool').
	success(function(data, status, headers, config) {
		$scope.pools = data;
	});
	$scope.addVote = function(pooloptions) {
		$http.get('/api/pooloption/addvote/' + pooloptions.id).
		success(function(data, status, headers, config) {
			pooloptions.vote++;
		});
	}

});

app.controller('loginController', function($scope, $http, Users) {

	$scope.pools = [];

$scope.login = function() {
			var success = true;

			// save the comment. pass in comment data from the form
			// use the function we created in our service
			Users.login($scope.authCredentials)
				.success(function(data) {
					
					if(data){
					// $location.path('/admin');
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
	$scope.addVote = function(pooloptions) {
		$http.get('/api/pooloption/addvote/' + pooloptions.id).
		success(function(data, status, headers, config) {
			pooloptions.vote++;
		});
	}

});

app.controller('adminController', function($scope, $http) {

	$scope.pools = [];
	$scope.pools.pool = {};
	$http.get('/api/pool').
	success(function(data, status, headers, config) {
		$scope.pools = data;
	});
	$scope.addPool = function() {
		$http.post('/api/pool', $scope.pools.pool).
		success(function(data, status, headers, config) {
			data.pooloptions=[];
			$scope.pools.push(data);
			$scope.pools.pool.title="";
		});
	}
	$scope.removePool = function(pool) {
		$http.delete('/api/pool/' + pool.id).
		success(function(data, status, headers, config) {
			for (index = 0; index < $scope.pools.length; ++index) {
				if ($scope.pools[index].id == pool.id) {
					$scope.pools.splice(index, 1);
				}
			}
		});
	}
	$scope.addOption = function(pool,pooloptions) {
		pooloptions.pool_id=pool.id;
		$http.post('/api/pooloption', pooloptions).
		success(function(data, status, headers, config) {
			pool.pooloptions.push(data);
			pooloptions.title='';
		});	
	}
	$scope.removeOption = function(pooloption, pool) {
		$http.delete('/api/pooloption/' + pooloption.id).
		success(function(data, status, headers, config) {
			for (index = 0; index < pool.pooloptions.length; ++index) {
				if (pool.pooloptions[index].id == pooloption.id) {
					pool.pooloptions.splice(index, 1);
				}
			}

		});
	}
});