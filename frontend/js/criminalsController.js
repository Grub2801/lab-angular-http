angular.module('TheCriminalsApp', [])
  .controller('CriminalsController', ['$scope', '$http', function CriminalsController ($scope, $http){

    $scope.all = [];
    $scope.newCriminal = {};
    $scope.addCriminal = addCriminal;

    getCriminals();
    function getCriminals() {
      $http
        .get('http://localhost:3000/criminals')
        .success(function (data){
          $scope.all = data.criminals
        });
    }

    function addCriminal() {
      $http
        .post('http://localhost:3000/criminals', $scope.newCriminal)
        .success(function (data){
          getCriminals();
        });
      $scope.newCriminal = {};
    }

  }])