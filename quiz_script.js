var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('QuizContainer');
var questionEl = document.getElementById('Question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
	var q = questions[questionIndex];
    //document.getElementById('Question').textContent=(questionIndex + 1) + '.' + q.question;
	questionEl.textContent = (questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption) {
		alert('select your answer!!');
		return;
	}

	var ans = selectedOption.value;
	if(questions[currentQuestion].answer == ans){
		score +=10;

	}

	selectedOption.checked = false;
	currentQuestion++;

	if (currentQuestion == totQuestions-1) {
		nextButton.textContent = 'Finish';

	}

	if (currentQuestion == totQuestions) {
		container.style.display = 'none';
		resultCont.style.display = ' ';
		nextButton.style.display = 'none';
		resultCont.textContent = 'Your score is :' + score;
		return;
	}

	loadQuestion(currentQuestion); 
}

loadQuestion(currentQuestion);