angular.module("ngCribs").controller("cribsController", function($scope, cribsFactory) {
	$scope.cribs;

	$scope.priceInfo = {
		min: 0,
		max: Infinity
	};

	$scope.newListing = {};

	$scope.addCrib = function(newListing) {
		newListing.image = "crib-default";
		$scope.cribs.push(newListing);
		$scope.newListing = {};
	};

	$scope.editCrib = function(crib) {
		$scope.editListing = true;
		$scope.existingListing = crib;
	};

	$scope.saveCribEdit = function() {
		$scope.existingListing = {};
		$scope.editListing = false;
	};

	$scope.deleteCrib = function(listing) {
		var index = $scope.cribs.indexOf(listing);
		$scope.cribs.splice(index, 1);
		$scope.existingListing = {};
		$scope.editListing = false;
	};

	cribsFactory.getCribs().then(function(data) {
		$scope.cribs = data.data;
	}, function(error) {
		console.log(error);
	});
});
