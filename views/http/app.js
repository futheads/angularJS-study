angular.module('app', [])
.config(function ($httpProvider) {

})
.controller('MyCtrl', function ($scope, $http) {
    $scope.age = '';
    $scope.username = '';
    $scope.pickname = '';
    $scope.password = '';
    $scope.adduser = function () {
        $http.post('http://localhost:8080/users/',
            {"age": $scope.age, "password": $scope.password, "pickname": $scope.pickname, "username": $scope.username})
            .success(function (resp) {
                console.log(resp);
            })
    }
})