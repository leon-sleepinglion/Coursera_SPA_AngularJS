(function(){
'use strict';

angular.module('public')
.service('signUpService',signUpService);

signUpService.$inject = ['$http'];
function signUpService($http){
	var service = this;

	service.retrieve = function(shortName){
		var url = "https://fathomless-falls-78245.herokuapp.com/menu_items/" + shortName + ".json";
		$http({
			method: "GET",
			url: url
		}).then(function(response){
			console.log(response.data);
		}).catch(function(response){
			console.log("noob shit");
		});
	};
}
})();