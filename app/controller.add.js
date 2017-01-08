var controller = angular.module('angular-google-api-example');

controller.controller('add', ['$scope', 'GApi', '$state',
    function ($scope, GApi, $state) {
    	$scope.submitAdd = function() {
    		GApi.executeAuth('myContactApi', 'contact.add', $scope.contact).then(function(resp) {
            	$state.go('home');
        	});
    	}
    }
]);