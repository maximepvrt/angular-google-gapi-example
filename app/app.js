var app = angular.module('angular-google-api-example', [
    'ngCookies',
    'ui.router',
    'angular-google-gapi',
]);

app.run(['GAuth', 'GApi', 'GClient', '$state', '$rootScope', '$window', '$cookies', '$injector',
    function(GAuth, GApi, GClient, $state, $rootScope, $window, $cookies, $injector) {

        //$rootScope.gdata = GData;

        var CLIENT = '526374069175-4vv42arm0ksdr9a1lgkve6vbktfkmlvv.apps.googleusercontent.com';
        var BASE = 'https://cloud-endpoints-gae.appspot.com/_ah/api';

        GApi.load('myContactApi', 'v1', BASE);
        GApi.load('calendar', 'v3');
        GClient.setClient(CLIENT);
        GClient.setScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly');

        /*var currentUser = $cookies.get('userId');
        if(currentUser) {
            GData.setUserId(currentUser);
            $rootScope.isLoading = true;
            GAuth.checkAuth().then(
                function () {
                    if($state.includes('login')) {
                        $state.go('home');
                    }
                    $rootScope.isLoading = false;
                },
                function() {
                    $state.go('login');
                    $rootScope.isLoading = false;
                }
            );
        } else {
            $state.go('login');
        }*/



        /*$rootScope.logout = function() {
            GAuth.logout().then(function () {
                $cookies.remove('userId');
                $state.go('login');
            });
        };*/

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var currentState = toState;

            callMiddlewares(event, currentState);

            function callMiddlewares(event, state) {
                if (state && state.hasOwnProperty('middleware')) {
                    if (typeof currentState.middleware === 'object') {
                        angular.forEach(state.middleware, function (middleWare) {
                            callMiddleware(middleWare, event);
                        });
                        return;
                    }
                }
            }

            function callMiddleware(middleWare, event) {
                try {
                    $injector.get(middleWare).run(event);
                } catch (e) {
                    console.log(e);
                    console.error('the factory : ' + middleWare + ' does not exist');
                }
            };
        });
    }
]);
