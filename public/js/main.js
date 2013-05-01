
var tarot = angular.module("tarot", []);

tarot.directive("deck", function(){
	return {
		restrict:"E",
		template:'<div id="deck" class="card_wrapper"><span class="deck">hi</span></div>'
	}
});

tarot.directive("situation", function(){
	return {
		restrict:"E",
		template:'<div id="situation" class="card_wrapper coins"><span class="one"></span></div>'
	}
});

tarot.directive("challenge", function(){
	return {
		restrict:"E",
		template:'<div id="challenge" class="card_wrapper wands"><span class="one"></span></div>'
	}
});

tarot.directive("power", function(){
	return {
		restrict:"E",
		template:'<div id="higher-power" class="card_wrapper cups"><span class="one"></span></div>'
	}
});

tarot.directive("foundation", function(){
	return {
		restrict:"E",
		template:'<div id="foundation" class="card_wrapper cups"><span class="ten"></span></div>'
	}
});

tarot.directive("past", function(){
	return {
		restrict:"E",
		template:'<div id="past" class="card_wrapper coins"><span class="one"></span></div>'
	}
});

tarot.directive("future", function(){
	return {
		restrict:"E",
		template:'<div id="future" class="card_wrapper wands"><span class="one"></span></div>'
	}
});

tarot.directive("self", function(){
	return {
		restrict:"E",
		template:'<div id="self" class="card_wrapper cups"><span class="one"></span></div>'
	}
});

tarot.directive("others", function(){
	return {
		restrict:"E",
		template:'<div id="others" class="card_wrapper cups"><span class="ten"></span></div>'
	}
});
tarot.directive("hope", function(){
	return {
		restrict:"E",
		template:'<div id="hope-fear" class="card_wrapper cups"><span class="one"></span></div>'
	}
});

tarot.directive("outcome", function(){
	return {
		restrict:"E",
		template:'<div id="outcome" class="card_wrapper cups"><span class="ten"></span></div>'
	}
});