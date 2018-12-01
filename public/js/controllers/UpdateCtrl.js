angular.module('UpdateCtrl', []).controller('UpdateController', function($scope) {

	$scope.taskname = '';
    $scope.description = '';
     $scope.date = '';

    $scope.clear = function () {
        $scope.taskname = '';
        $scope.description = '';  
        $scope.date = '';    
    };

});