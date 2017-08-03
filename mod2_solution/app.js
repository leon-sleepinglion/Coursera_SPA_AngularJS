(function(){
'use strict';

var app = angular.module('ShoppingListCheckOff',[]);
app.controller('ToBuyController',ToBuyController);
app.controller('AlreadyBoughtController',AlreadyBoughtController);
app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//controller for first list
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyList(); //bind the list in service to this list in controller
  toBuy.bought = function(index){
    ShoppingListCheckOffService.bought(index); //create a property called bought and assign the function in services to it
  };
}

//controller for second list
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var Bought = this;
  Bought.boughtItems = ShoppingListCheckOffService.getBoughtList(); //bind the list in service to this list in controller
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyList = [
    {name:"cookies", quantity:10},
    {name:"cola", quantity:2},
    {name:"fries",quantity:3},
    {name:"spaghetti",quantity:5},
    {name:"sauce",quantity:1}
  ];
  var boughtList = [];
  service.bought = function(index){
    boughtList.push(toBuyList.splice(index,1)[0]);
  };
  service.getToBuyList = function(){
    return toBuyList;
  };
  service.getBoughtList = function(){
    return boughtList;
  };
}
})();
