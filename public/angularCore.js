// Create new angular module
var todoAppAng = new angular.module('todoAppAng', []);

todoAppAng.controller('mainController', function($scope, $http) {
    $scope.formData = '';
    $http.get('/showList').
        then(function(response) {
            console.log(response);
            console.log('hi');
            $scope.todos = response.data;
        });

    $scope.createTodo = function() {
        $http.post('/addItem', {"text": $scope.formData}).then(function(response) {
            console.log('inside success', response);
            $scope.formData = '';
            $scope.todos = response.data;
        });
    }

});