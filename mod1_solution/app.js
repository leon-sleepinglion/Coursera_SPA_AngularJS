(function(){
  'use strict';

  var app = angular.module('lunchChecker',[]);

  app.controller('lunchCheckerCtrl',lunchCheckerCtrl);

  lunchCheckerCtrl.$inject = ['$scope'];

  function lunchCheckerCtrl($scope){
    $scope.menu = "";

    $scope.message = "";

    $scope.check = function(){
      if($scope.menu===""){
        $scope.message = "Please enter data first";
        return;
      }
      var items = $scope.menu.split(",");
      if(items.length <= 3){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };

  };
  
})();
