window.onload= function(){
	//need to tell angular what is the root of the app
	var $rootElement = angular.element(window.document)
	var modules = [
		//angular module that has all the API's used to build directives
		//if manually bootstrapping angular you must define this module
		'ng',
		'app',
		function($provide){
			$provide.value('$rootElement', $rootElement)
		}
	];
	//dependency injector
	var $injector = angular.injector(modules);
	//compile service traverse the DOM looking for directives
	var $compile = $injector.get('$compile');
	//compile returns linking functions which attaches directives to the scope
	var compositeLinkFn = $compile($rootElement);
	//get the rootScope
	var $rootScope = $injector.get('$rootScope');
	//apply linking function to rootScope
	compositeLinkFn($rootScope);	
	//tell angular to go
	$rootScope.$apply();
}