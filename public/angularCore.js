// Create new angular module
var todoAppAng = new angular.module('todoAppAng', []);

todoAppAng.controller('mainController', function($scope, $http) {
    $scope.test = 'the seaport is cool!!!';
    $scope.formData = 'you have not submitted yet!';
    $http.get('/showList').
        then(function(response) {
            console.log(response);
            console.log('hi');
            $scope.todos = response.data;
        });

    $scope.createTodo = function() {
        $http.post('/addItem', {"text": $scope.formData}).success(function(data) {
            console.log('inside success', data);
        });

    }

});