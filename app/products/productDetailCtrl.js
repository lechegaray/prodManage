(function () {
  "use strict";

  angular
      .module("productManagement")
      .controller("ProductDetailCtrl",
                  ProductDetailCtrl);

  function ProductDetailCtrl() {
    var vm = this;

    vm.product = {
      "productId": 2,
      "productName": "Garden Cart",
      "productCOde": "GDN-0023",
      "releaseDate": "March 18, 2010",
      "description": "15 gallon capacity rolling garden cart",
      "cost": 20.00,
      "price": 32.99,
      "category": "garden",
      "tags": ["barrow", "cart", "wheelbarrow"],
      "imageUrl": "http://www.placecage.com/300/300"
    };

    vm.title = "Product Detail: " + vm.product.productName;

    if (vm.product.tags){
      vm.product.tagList = vm.product.tags.toString();
    }
  }

}());