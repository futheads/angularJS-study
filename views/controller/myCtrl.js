angular.module("app", [])
.controller("MyCtrl", function ($scope) {
    $scope.msg = "";
    $scope.user = {uname:'', pwd:''};
    $scope.errormsg = "";
    $scope.login = function () {
        if ($scope.user.uname == "admin" && $scope.user.pwd == "123") {
            alert("登录成功");
        } else {
            $scope.errormsg = "用户名或密码错误";
        }
    }
})