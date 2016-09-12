(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.msgResult = "";
  $scope.msg = "";
  $scope.myColor = "";

  $scope.msgCheck = function () {
    var result = calcLunchItems($scope.msg);
      $scope.msgResult = result.msg;
      $scope.myColor = result.color;
  };

}

function calcLunchItems(lunchItems){
  var result = {};
  var lunchItemsMsg = lunchItems.trim();
  lunchItemsMsg = lunchItemsMsg.split(",");
  if(lunchItemsMsg.length == 1){
      if(lunchItemsMsg[0] == ""){
        result.msg = "Please enter data first";
        result.color = "red";
      }else{
        result.msg = "Enjoy!";
        result.color = "green";
      }

  }else if(lunchItemsMsg.length > 3){
      result.msg = "Too much!";
      result.color = "green";
  }else{
      result.msg = "Enjoy!";
      result.color = "green";
  }
  return result;
}

})();
