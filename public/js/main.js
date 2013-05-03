
var tarot = angular.module("tarot", []);

tarot.controller("tarotController", function($scope, $http){
	$http.get('js/model/deck.js').success(function(data){
		console.log(data);
		$scope.model = data;
	});

	$scope.card_count = 0;
	$scope.draw = function(){
		$scope.card =  Math.floor((Math.random() * 77)+1);
		
		if($scope.card_count < 10 ){
			switch($scope.card_count){
                case 0:
                	$('#situation img').attr('src', $scope.model.cards[$scope.card].image);
                	$('#reading').prepend($('<dd/>').html($scope.model.cards[$$scope.card].image));
                  	break;
                case 1:
                    $('#challenge img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 2:
                  	$('#power img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 3:
              		$('#foundation img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 4:
               		$('#past img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 5:
             		$('#future img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 6:
                   	$('#self img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 7:
                   $('#influences img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 8:
                   $('#hope img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
                case 9:
                   $('#outcome img').attr('src', $scope.model.cards[$scope.card].image);
                    break;
            }

            $scope.model.cards.splice($scope.card, 1);
            
            $scope.card_count++;
		}
	}
});

tarot.directive("deck", function(){
	return {
		restrict:"E",
		templateUrl:'js/partials/deck.html'
		}
});

tarot.directive("spread", function(){
	return {
		restrict:"E",	
		templateUrl:'js/partials/spread.html'
	}
});

tarot.directive("reading", function(){
	return {
		restrict:"E",
		templateUrl: 'js/partials/reading.html'
	}
})
