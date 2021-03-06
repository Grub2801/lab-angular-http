angular.module('TheCriminalsApp', [])
  .controller('CriminalsController', ['$scope', '$http', function CriminalsController ($scope, $http){

    $scope.all = [];
    $scope.newCriminal = {};
    $scope.addCriminal = addCriminal;
    $scope.deleteCriminal = deleteCriminal;
    $scope.showCriminal = showCriminal;
    $scope.editCriminal = {};
    $scope.updateCriminal = updateCriminal;

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

    function deleteCriminal(id) {
      $http
        .delete('http://localhost:3000/criminals/' + id)
        .success (function(){
          getCriminals();
        })
    }

    function showCriminal(criminal) {
      $scope.editCriminal = criminal;
    }

    function updateCriminal() {
      $http
        .patch('http://localhost:3000/criminals/' + $scope.editCriminal._id, $scope.editCriminal)
        .success (function() {
          getCriminals();
        })
    };

  }])