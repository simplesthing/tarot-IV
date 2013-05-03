
var tarot = angular.module("tarot", []);

tarot.controller("tarotController", function($scope, $http){
	$http.get('js/model/deck.js').success(function(data){
		console.log(data);
		$scope.model = {};
    $scope.model.cards = data.cards;
	});

	$scope.card_count = 0;
  $scope.updateSpread = function(dfd, id ){
      $('#'+ id +' img').attr('src', $scope.model.cards[$scope.card].image);
      $('#reading').prepend($('<dt/>').html(id));
      dfd.resolve();
  }
	$scope.draw = function(){
		$scope.card =  Math.floor((Math.random() * 77)+1);
		
		if($scope.card_count < 10 ){
			switch($scope.card_count){
                case 0:
                    var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].situation));
                    dfd.done($scope.updateSpread(dfd, 'situation'));
                  	break;
                case 1:
                var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].challenge));
                    dfd.done($scope.updateSpread(dfd, 'challenge'));
                    break;
                case 2:
                  var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].power));
                    dfd.done($scope.updateSpread(dfd, 'power'));
                    break;
                case 3:
              		var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].foundation));
                    dfd.done($scope.updateSpread(dfd, 'foundation'));
                    break;
                case 4:
               	var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].past));
                    dfd.done($scope.updateSpread(dfd, 'past'));
                    break;
                case 5:
             		var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].future));
                    dfd.done($scope.updateSpread(dfd, 'future'));
                    break;
                case 6:
                   var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].self));
                    dfd.done($scope.updateSpread(dfd, 'self'));
                    break;
                case 7:
                  var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].influences));
                    dfd.done($scope.updateSpread(dfd, 'influences'));
                    break;
                case 8:
                   var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].hope));
                    dfd.done($scope.updateSpread(dfd, 'hope'));
                    break;
                case 9:
                   var dfd = $.Deferred();
                    $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.card].outcome));
                    dfd.done($scope.updateSpread(dfd, 'outcome'));
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
