var angular = require('angular');

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.hello = 'World';
});
