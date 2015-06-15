var mainmodule = angular.module('earnfrontend', ['ngRoute']);

mainmodule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/home',
            controller: 'HomeCtrl'
        })
        // .when('Fichiers', {
        // 	templateUrl: '/fichiers',
        // 	controller:
        // })
        .otherwise({
            redirectTo: '/'
        });
});

// mainmodule.controller('ListController', function($scope, $http) {
    //   $scope.sendToServer = function(){
    //       $http.post('/api',{'item':$scope.listitem})
    //            .success(function(res){
    //                getFromServer();
    //            });
    //   }
    //   getFromServer();
    //   function getFromServer(){
    //       $http.get('/api')
    //            .success(function(res){
    //                $scope.items = res;
    //                console.log(res);
    //            });
    //   }
    // });


mainmodule.controller('HomeCtrl', function($scope) { 


});