'use strict';


angular.module('ngCart.directives', [])



    .controller('CartController',['$scope', 'ngCart', function($scope, ngCart) {

        $scope.ngCart = ngCart;


    }])

    .directive('addtocart', ['ngCart', function(ngCart){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {
                id:'@',
                name:'@',
                quantity:'@',
                price:'@',
                data:'='
            },
            transclude: true,
            templateUrl: 'ndfnd.ngcart/templates/addtocart.html',
            link:function(scope, element, attrs){
                scope.attrs = attrs;
                scope.inCart = function(){
                    return ngCart.getItemById(attrs.id);
                }
            }
        };
    }])

    .directive('cart', ['ngCart', function(ngCart){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {},
            templateUrl: 'ndfnd.ngcart/templates/cart.html',
            link:function(scope, element, attrs){

            }
        };
    }])

    .directive('summary', ['ngCart', function(ngCart){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {},
            transclude: true,
            templateUrl: 'ndfnd.ngcart/templates/summary.html'
        };
    }])

