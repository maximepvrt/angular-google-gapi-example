angular.module('angular-google-api-example')
    .factory('authMiddleware', ['GData', '$state', '$rootScope', function(GData, $state, $rootScope) {

        var authMiddleware = this;

        //if user is not logged in re-direct to login route
        authMiddleware.run = function (event) {
            if (!GData.isLogin() && !$rootScope.isLoading) {
                event.preventDefault();
                console.error('You are not logged in, so you cant browse this');
                $state.go('login');
            }
        };

        return {
            run: authMiddleware.run
        };
    }]);