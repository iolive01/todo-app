// Create new angular module
var todoAppAng = new angular.module('todoAppAng', []);

todoAppAng.controller('mainController', function($scope, $http) {
    $scope.test = 'the seaport is cool!!!';

    $http.get('/showList').
        then(function(response) {
            console.log(response);
            console.log('hi');
            $scope.todos = response;
        });
        // .error(function(data) {
        //     console.log('bye');
        //     console.log('error with angular stuff', data);
        // });
});