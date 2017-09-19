(function(){
'use strict';

angular.module('public')
.controller('infoController', infoController);

infoController.$inject = ['signUpService'];
function infoController(signUpService){
	var info = this;

	info.user = signUpService.getUser();

	info.registered = info.user.email ? true : false;
}
})();