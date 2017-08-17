    angular.module('app', [])
    .value('realname', 'futhead')
    .constant('http', "http://futhead.com")
    .factory('Data', function () {
        return {
            msg: "你好啊",
            setMsg : function() {
                this.msg = "我不好";
            }
        }
    })
    .service("User", function () {
        this.firstname = "Hello";
        this.lastname = "Futhead";
        this.getName = function () {
            return this.firstname + this.lastname;
        }
    })
    .controller('MyCtrl', function ($scope, realname, http, Data, User) {
        $scope.msg = "你好";
        $scope.realname = realname;
        $scope.http = http;
        $scope.data = Data;
        Data.setMsg();
        $scope.uname = User.getName();
    })