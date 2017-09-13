(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['itemsData'];
function ItemsController(itemsData){
	this.category = itemsData.category.name;
	this.items = itemsData.menu_items;
}

})();