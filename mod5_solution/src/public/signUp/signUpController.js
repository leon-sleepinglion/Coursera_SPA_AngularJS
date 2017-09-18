(function (){
"use strict";

angular.module('public')
.controller('signUpController',signUpController);

signUpController.$inject = ['$http','signUpService'];
function signUpController($http, signUpService){
	var signUp = this;

	signUp.submit = function(){
		signUpService.retrieve(signUp.menuNumber);
	};
}
})();