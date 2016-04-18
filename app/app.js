'use strict';

// Declare app level module which depends on views, and components
var myapp = angular.module('myApp', []);

myapp.constant("dataUrl", "http://localhost:63342/angularStudy0412/app/data.json")
    .controller('myCtrl', function($scope, $http, dataUrl){
  $scope.data = {};

  $http.get(dataUrl)
      .success(function(data){
        $scope.data.products = data;
      })
      .error(function(error){
        console.dir("error")
      })
});

