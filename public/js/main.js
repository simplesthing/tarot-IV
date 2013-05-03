
var tarot = angular.module("tarot", []);

tarot.controller("tarotController", function($scope, $http){
	$http.get('js/model/deck.js').success(function(data){
		//controller holds the model
		//set 'dot' model from http GET->routes/tabs to
    	//prevent children from overwriting properties to their
    	//own scope when they should be writing back to global model
		$scope.model = {};
		$scope.model.deck = data;
		$scope.selected = [];

		$scope.select = function(card){
			$scope.selected.push(card);
			if($scope.selected.length <10 ){
				
			} 
			console.log($scope.selected);
		}
});

tarot.directive("deck", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/deck.html'
	}
});

tarot.directive("situation", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/situation.html'
	}
});

tarot.directive("challenge", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/challenge.html'
	}
});

tarot.directive("power", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/power.html'
	}
});

tarot.directive("foundation", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/foundation.html'
	}
});

tarot.directive("past", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/past.html'
	}
});

tarot.directive("future", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/future.html'
	}
});

tarot.directive("self", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/self.html'
	}
});

tarot.directive("influences", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/influences.html'
	}
});
tarot.directive("hope", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/hope.html'
	}
});

tarot.directive("outcome", function(){
	return {
		restrict:"E",
		templateUrl:'./js/partials/outcome.html'
	}
});