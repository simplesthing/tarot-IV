
var tarot = angular.module("tarot", []);

tarot.controller("tarotController", function($scope, $http){
	$http.get('js/model/deck.js').success(function(data){
		$scope.model = {};
    $scope.model.cards = data.cards;
    $scope.model.card_count = 0;
  });
	
  $scope.updateSpread = function(dfd, id ){
    $('#'+ id +' img').attr('src', $scope.model.cards[$scope.model.card].image);
    $('#reading').prepend($('<dt/>').html(id));
    dfd.resolve();
  }
  $scope.draw = function(){
    $scope.model.card =  Math.floor((Math.random() * 77)+1);

    if($scope.model.card_count < 10 ){
     switch($scope.model.card_count){
      case 0:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].situation));
      dfd.done($scope.updateSpread(dfd, 'situation'));
      break;
      case 1:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].challenge));
      dfd.done($scope.updateSpread(dfd, 'challenge'));
      break;
      case 2:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].power));
      dfd.done($scope.updateSpread(dfd, 'power'));
      break;
      case 3:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].foundation));
      dfd.done($scope.updateSpread(dfd, 'foundation'));
      break;
      case 4:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].past));
      dfd.done($scope.updateSpread(dfd, 'past'));
      break;
      case 5:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].future));
      dfd.done($scope.updateSpread(dfd, 'future'));
      break;
      case 6:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].self));
      dfd.done($scope.updateSpread(dfd, 'self'));
      break;
      case 7:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].influences));
      dfd.done($scope.updateSpread(dfd, 'influences'));
      break;
      case 8:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].hope));
      dfd.done($scope.updateSpread(dfd, 'hope'));
      break;
      case 9:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].outcome));
      dfd.done($scope.updateSpread(dfd, 'outcome'));
      break;
    }

    $scope.model.cards.splice($scope.model.card, 1);

    $scope.model.card_count++;
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
