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

  $scope.allData = [
    {
      category: 'Staff Trivia',
      questions: [
          {
            value: 200,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 400,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 600,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 800,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 1000,
            question: "whats your name",
            answer: "albrey",
            status: true,
          }
        ],
      },
      {
      category: 'JavaScript Battle',
      questions: [
          {
            value: 200,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 400,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 600,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 800,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 1000,
            question: "whats your name",
            answer: "albrey",
            status: true,
          }
        ],
      },
      {
      category: 'Where In San Francisco',
      questions: [
          {
            value: 200,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 400,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 600,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 800,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 1000,
            question: "whats your name",
            answer: "albrey",
            status: true,
          }
        ],
      },
      {
      category: "This and Other Gotchas",
      questions: [
          {
            value: 200,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 400,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 600,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 800,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 1000,
            question: "whats your name",
            answer: "albrey",
            status: true,
          }
        ],
      },
      {
      category: "Name That Data Structure!",
      questions: [
          {
            value: 200,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 400,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 600,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 800,
            question: "whats your name",
            answer: "albrey",
            status: true,
          },
          {
            value: 1000,
            question: "whats your name",
            answer: "albrey",
            status: true,
          }
        ],
      },
  ];

  $scope.showAnswer = function(){
    console.log("hey")
  }
});