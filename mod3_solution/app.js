(function(){
'use strict';

var app = angular.module('NarrowItDownApp',[]);
app.controller('NarrowItDownController',NarrowItDownController);
app.service('MenuSearchService',MenuSearchService);
app.directive('foundItems',foundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var narrow = this;

  narrow.searchField = "";

  narrow.search = function(searchTerm){
    MenuSearchService.getMatchedMenuItems(searchTerm);
  }

  narrow.found = MenuSearchService.getFoundItems();

  narrow.message = MenuSearchService.getMessage();

  narrow.removeItem = function(itemIndex){
    MenuSearchService.removeItem(itemIndex);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;

  var foundItems = [];

  var message = [""];

  service.getMessage = function(){
    console.log("EZ");
    return message[0];
  }

  service.getFoundItems = function(){
    return foundItems;
  }

  service.getMatchedMenuItems = function(searchTerm){
    foundItems.length = 0;
    var reg = new RegExp(searchTerm,"gi");
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function(response){
        message[0] = "";
        if(searchTerm.trim() == ""){ //if the search term is empty
          message[0] = "Not found";
          return foundItems;
        }
        for (var menu_item of response.data.menu_items) {
          if (reg.test(menu_item.name)){
            foundItems.push(menu_item);
          }
        }
        if(foundItems.length == 0){
          message[0] = "Not found";
        }
        return foundItems;
    });
  }

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };
}

function foundItemsDirective(){
  var ddo = {
    templateUrl: "foundItems.html",
    scope: {
      items: "<",
      onRemove: "&",
      message: "<"
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  }
  return ddo;
}

function foundItemsDirectiveController(){
  var list = this;
}

})();
