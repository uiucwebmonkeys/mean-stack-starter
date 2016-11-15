var app = angular.module('taskApp', []);

app.controller('MainController', function ($scope, $http) {
    $scope.tasks = [];
    $http.get('http://localhost:4000/api/tasks')
         .success(function (data) {
             $scope.tasks = data;
         }).error(function (err) {
             alert(err);
         });

    $scope.postTask = function() {
        $http.post('http://localhost:4000/api/tasks', {'name': $scope.newTask})
            .success(function(data) {
                $scope.newTask = ''; // clear the form so our user is ready to enter another
                $scope.tasks = data;
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    }
});
