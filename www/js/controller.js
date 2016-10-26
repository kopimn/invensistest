angular.module('starter.controllers', [])

.controller('LoginPageCtrl', function($scope, $state) {

	$scope.loginUser=function(){
		$state.go("testPage");
	};

})

.controller('TestPageCtrl', function($scope, $state, $window) {
  
	$scope.questions = [
	    {"questionText": "sample question 1 ?", "answers": [
	      {"answerText":"answer 1", "correct": true},
	      {"answerText":"answer 2", "correct": false},
	      {"answerText":"answer 3", "correct": false}
	      ]},
	    {"questionText": "sample question 2 ?", "answers": [
	      {"answerText":"answer 1", "correct": true},
	      {"answerText":"answer 2", "correct": false},
	      {"answerText":"answer 3", "correct": false}
	      ]},
	    {"questionText": "sample question 3 ?", "answers": [
	      {"answerText":"answer 1", "correct": true},
	      {"answerText":"answer 2", "correct": false},
	      {"answerText":"answer 3", "correct": false}
	      ]},
	    {"questionText": "sample question 4 ?", "answers": [
	      {"answerText":"answer 1", "correct": true},
	      {"answerText":"answer 2", "correct": false},
	      {"answerText":"answer 3", "correct": false}
	      ]}
  	];

	$scope.answers ={};
	$scope.correctCount = 0;

  	$scope.showResult = function(){
	    $scope.correctCount = 0;
	    var qLength = $scope.questions.length;
	    for(var i=0;i<qLength;i++){
	      	var answers = $scope.questions[i].answers;
	     	$scope.questions[i].userAnswer = $scope.answers[i];
	      	for(var j=0;j<answers.length;j++){
		        answers[j].selected = "donno";
		        if ($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===true){
		          answers[j].selected = "true";
		          $scope.correctCount++;
		        }else if($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===false){
		          answers[j].selected = "false";
		        }
	      	}
	    }
	    $window.localStorage['testscore']=$scope.correctCount;
	    $window.localStorage['questionCount']=qLength;
	    $state.go("thankYouPage");
 	};
})

.controller('ThanksPageCtrl', function($scope, $state, $timeout, $window) {
	
	$scope.score=$window.localStorage['testscore'];
	$scope.questionCount=$window.localStorage['questionCount'];

	$timeout(function() {
     	$state.go("loginPage");
 	}, 5000);

})