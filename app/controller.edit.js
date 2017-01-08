var controller = angular.module('angular-google-api-example');

controller.controller('edit', ['$scope', 'GApi', '$state', '$stateParams',
    function ($scope, GApi, $state, $stateParams) {
    	GApi.executeAuth('myContactApi', 'contact.get', {'id': $stateParams.id}).then(function(resp) {
            $scope.contact = resp;
        });
    	$scope.submitEdit = function() {
    		GApi.executeAuth('myContactApi', 'contact.update', $scope.contact).then(function(resp) {
            	$state.go('home');
        	});
    	}
    }
]);