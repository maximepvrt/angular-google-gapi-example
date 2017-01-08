var controller = angular.module('angular-google-api-example');

controller.controller('login', ['$scope', 'GAuth', 'GApi', '$state', '$cookies',
    function ($scope, GAuth, GApi, $state, $cookies) {
    	/*if(GData.isLogin()){
    		$state.go('home');
    	}*/

        $scope.doLogin = function() {
            console.log('0');
            GAuth.signIn();
            /*GAuth.checkAuth().then(
                function () {
                    console.log('1');
                    $cookies.put('userId', GData.getUserId());
                    $state.go('home');
                },
                function() {
                    GAuth.login().then(function(){
                        console.log('1');
                        $cookies.put('userId', GData.getUserId());
                        $state.go('home');
                    }, function () {
                        console.log('2');
                    });
                }
            );*/

        };
        GApi.executeAuth('calendar', 'calendar.calendarList.list').then( function(resp) {
            console.log(resp);
        });
    }
])