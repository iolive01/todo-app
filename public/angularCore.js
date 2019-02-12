// Create new angular module
var todoAppAng = new angular.module('todoAppAng', []);

todoAppAng.controller('mainController', function($scope, $http) {
    $scope.formData = '';
    $http.get('/showList').
        then(function(response) {
            console.log('hi');
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

    // trigger this on checkbox click
    $scope.deleteTodo = function(id) {
        $http.delete('/deleteItem?_id=' + id).then(function(response) {
            $scope.todos = response.data[0];
            $scope.done = response.data[1];
            console.log('responded');
        });
    }

});