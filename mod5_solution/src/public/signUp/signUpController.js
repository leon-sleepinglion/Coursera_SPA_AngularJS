(function (){
"use strict";

angular.module('public')
.controller('signUpController',signUpController);

signUpController.$inject = ['$http','signUpService'];
function signUpController($http, signUpService){
	var signUp = this;

	signUp.notExist = false;
	signUp.saved = false;

	signUp.submit = function(){
		var promise = signUpService.retrieve(signUp.menuNumber);
		promise.then(function(response){
			signUp.notExist = false;
			var user = {
				"firstName": signUp.firstName,
				"lastName": signUp.lastName,
				"email": signUp.email,
				"phone": signUp.phone,
				"menuNumber": signUp.menuNumber,
				"itemName": response.data.name,
				"itemDescription": response.data.description,
				"itemImageURL": "https://fathomless-falls-78245.herokuapp.com/images/" + signUp.menuNumber
			};
			signUpService.setUser(user);
			signUp.saved = true;
		}, function(error){
			signUp.notExist = true;
		});
	};
}
})();