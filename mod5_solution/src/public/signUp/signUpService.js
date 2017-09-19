(function(){
'use strict';

angular.module('public')
.service('signUpService',signUpService);

signUpService.$inject = ['$http'];
function signUpService($http){
	var service = this;

	var user = {};

	service.setUser = function(newUser){
		user = newUser;
	};

	service.getUser = function(){
		return user;
	};

	service.retrieve = function(shortName){
		var url = "https://fathomless-falls-78245.herokuapp.com/menu_items/" + shortName + ".json";

		return $http({
			method: "GET",
			url: url
		});
	};
}
})();