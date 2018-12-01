angular.module('CreateCtrl', []).controller('CreateController', function($scope,$http) {

	$scope.taskname = '';
    $scope.description = '';
     $scope.date = '';

    $scope.clear = function () {
        $scope.taskname = '';
        $scope.description = '';  
        $scope.date = '';  
    };

   $scope.submit = function() {
            var data = {
                    taskname : $scope.taskname,
                    description : $scope.description,
                    date: $scope.date
                }
            $http.post('/createData', data).then(function (data) {
                    console.log("success>>>>",data)
                })
        };  


});