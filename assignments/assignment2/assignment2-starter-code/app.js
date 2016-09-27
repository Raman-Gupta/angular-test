(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.tobuyitems = ShoppingListCheckOffService.getToBuyItems();

  list1.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
    list1.errorMessage = ShoppingListCheckOffService.getErrorMessage();
  };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  //var list2.boughtitems = [];

  list2.boughtitems = ShoppingListCheckOffService.getBoughtItems();
  list2.errorMessage  = ShoppingListCheckOffService.getErrorMessage();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name:"cookies",quantity: 5},{name:"breads",quantity: 50},{name:"water bottles",quantity: 15}
  ,{name:"sweets",quantity: 25},{name:"icecreams",quantity: 5}];
  var boughtItems = [];
  var errorMsg = 2;

  service.boughtItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
    if(toBuyItems.length == 0){
      errorMsg = 1;
    }else if(boughtItems.length == 0){
      errorMsg = 2;
    }else{
        errorMsg = 0;
    }
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getErrorMessage = function () {
    return errorMsg;
  };
}

})();
