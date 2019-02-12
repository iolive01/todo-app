/*

    angularCore.js
    Implementation of AngularJS frontend - deals with user entry, checking off
    to do items, deleting items, clearing all, and marking all as done.

 */

var todoAppAng = new angular.module('todoAppAng', []);

todoAppAng.controller('mainController', function($scope, $http) {
    $scope.formData = '';

    $http.get('/showList').
        then(function(response) {
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
        });

    $scope.createTodo = function() {
        $http.post('/addItem', {"text": $scope.formData}).then(function(response) {
            $scope.formData = '';
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
        });
    }

    $scope.deleteTodo = function(id) {
        $http.delete('/deleteItem?_id=' + id).then(function(response) {
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
        });
    }

    $scope.markAllDone = function() {
        $http.delete('/markAllDone').then(function(response) {
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
        });
    }

    $scope.clearAll = function() {
        $http.delete('/clearAll').then(function(response) {
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
        });
    }

});