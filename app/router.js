var router = angular.module('angular-google-api-example');

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
        }]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('login', {
                    url :'/login',
                    views :  {
                        '': {
                            templateUrl: 'partials/login.html',
                            controller: 'login',
                        },
                    },
                })

                .state('home', {
                    url :'/',
                    middleware: ['authMiddleware'],
                    views :  {
                        '': {
                            controller: 'home',
                            templateUrl: 'partials/home.html',
                        },
                    },
                })

                .state('add', {
                    url :'/add',
                    middleware: ['authMiddleware'],
                    views :  {
                        '': {
                            controller: 'add',
                            templateUrl: 'partials/add.html',
                        },
                    },
                })

                .state('edit', {
                    url :'/edit/{id}',
                    middleware: ['authMiddleware'],
                    views :  {
                        '': {
                            controller: 'edit',
                            templateUrl: 'partials/edit.html',
                        },
                    },
                })

    }])