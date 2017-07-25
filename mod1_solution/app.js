(function(){
  'use strict';

  var app = angular.module('LunchCheck',[]);

  app.controller('LunchCheckControl',LunchCheckControl);

  LunchCheckControl.$inject = ['$scope'];

  function LunchCheckControl($scope){
    $scope.menu = "";
    $scope.status = "";
    $scope.message = "";

    $scope.check = function(){
      if($scope.menu===""){
        $scope.message = "Please enter data first";
        $scope.status = "has-error";
        return;
      }
      var items = $scope.menu.split(",");
      if(items.length <= 3){
        $scope.message = "Enjoy!";
        $scope.status = "has-success";
      }
      else {
        $scope.message = "Too much!";
        $scope.status = "has-success";
      }
    };

  };

})();
