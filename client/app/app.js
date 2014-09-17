var app = angular.module('ng-jeopardy', []); // angular module created

app.directive('jeopardyCard', function(){
  return {
    restrict: 'EAC',
    link: function(scope, element, attributes){
    },
    templateUrl:'jeopardyCard.html',
    replace: true,
  };
});

app.controller('JeopardyCardController', function($scope){
  $scope.data = [
    {worth: 200, question: "who's the weakest out", answer: "kia fathi"},
    {worth: 400, question: "who's the weakest out", answer: "kia fathi"},
    {worth: 600, question: "who's the weakest out", answer: "kia fathi"},
    {worth: 800, question: "who's the weakest out", answer: "kia fathi"},
    {worth: 1000, question: "who's the weakest out", answer: "kia fathi"},

  ];

  $scope.title = ['Staff', 'JavaScript', 'San Francisco', 'FootBall', 'Hip Hop'];
});