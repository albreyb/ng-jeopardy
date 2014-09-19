var app = angular.module('ng-jeopardy', []); // angular module created

app.directive('jeopardyCard', function(){
  return {
    restrict: 'EAC',
    link: function(scope, element, attributes){
      element.on('click', function() {
        console.log(scope.$parent.value);
        console.log(scope.data[scope.$index].question);
        console.log(scope.title[scope.$index]);
      });
    },
    templateUrl:'jeopardyCard.html',
    replace: true,
  };
});

app.controller('JeopardyCardController', function($scope){
  $scope.data = [
    {worth: 200, question: "who's the weakest out", answer: "kia fathi", category: 'Staff'},
    {worth: 400, question: "who's the weakest out", answer: "soldier boy", category: 'Hip Hop'},
    {worth: 600, question: "who's the weakest out", answer: "kia fathi", category: 'FootBall'},
    {worth: 800, question: "question dawg", answer: "kia fathi", category: 'Staff'},
    {worth: 1000, question: "who's the weakest out", answer: "answer dawg", category: 'JavaScript'},
  ];

  $scope.value = [200, 400, 600, 800, 1000];

  $scope.title = ['Staff', 'JavaScript', 'San Francisco', 'FootBall', 'Hip Hop'];

  $scope.showAnswer = function(index, value) {
    // console.log($scope.title[index], value);
  };

});