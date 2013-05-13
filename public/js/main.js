
var tarot = angular.module("tarot", []);

tarot.controller("tarotController", function($scope, $http){
	$http.get('js/model/deck.js').success(function(data){
		$scope.model = {};
    $scope.model.cards = data.cards;
    $scope.model.card_count = 0;
  });
	
  $scope.updateSpread = function(dfd, id ){
    $('#'+ id +' img').attr('src', $scope.model.cards[$scope.model.card].image);
    $('#reading').find('dt.active').removeClass('active');
    $('#reading').prepend($('<dt/>').html(id).addClass('active'));
    dfd.resolve();
  }
  $scope.draw = function(){
    $scope.model.card =  Math.floor((Math.random() * 77)+1);
    $('#reading').find('dd.active').removeClass('active');
    if($scope.model.card_count < 10 ){
     switch($scope.model.card_count){
      case 0:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].situation).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'situation'));
      break;
      case 1:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].challenge).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'challenge'));
      break;
      case 2:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].power).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'power'));
      break;
      case 3:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].foundation).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'foundation'));
      break;
      case 4:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].past).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'past'));
      break;
      case 5:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].future).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'future'));
      break;
      case 6:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].self).addClass('active'));
      break;
      case 7:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].influences).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'influences'));
      break;
      case 8:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].hope).addClass('active'));
      dfd.done($scope.updateSpread(dfd, 'hope'));
      break;
      case 9:
      var dfd = $.Deferred();
      $('#reading').prepend($('<dd/>').html($scope.model.cards[$scope.model.card].outcome).addClass('active'));
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
