angular.module('app', [])
    .directive('hello', function () {
        // return {
        //     restrict:'E',
        //     template:'<div>Hello Futhead!</div>'
        // }
        return {
            restrict:'C',
            link: function () {
                alert("I'm here")
            }
        }
    })