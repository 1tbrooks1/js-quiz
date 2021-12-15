// Variables for quiz elements
var startButton  = document.getElementById('start');
var questionEl  = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var timerEl = document.getElementById('countdown');
var initialsEL = document.getElementById('initials');
var feedback = document.getElementById('feedback');

// Variables for timer and quiz questions
var timerId;
var countdown = 120;
var currentQuestion = 0;

// Questions to be cycled through
var quizQuestions = [
    {
        question: "blah blah blah",
        answers: [
             "blah",
             "blah",
             "blah"
        ],
        rightAnswer: "blah"
    },
    {
        question: "blah blah blah",
        answers: [
             "blah",
             "blah",
             "blah"
        ],
        rightAnswer: "blah"
    },
    {
        question: "blah blah blah",
        answers: [
             "blah",
             "blah",
             "blah"
        ],
        rightAnswer: "blah"
    }
];         

function startQuiz() {
    // this will hide the start screen once the quiz begins
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "start hide");

    // this will cause the questions to appear
    questionEl.setAttribute("class", "");

    // timer will begin to count
    timerId = setInterval(function() {
        countdown--;
        timerEl.innerHTML = countdown;
    }, 1000);
    if (countdown <= 0); {
    stopQuiz();
    }

    grabQuestion();

}

function grabQuestion() {
    // grab first question from array
    var currentQuestion = quizQuestions[questionIndex];

    // changes title to the question
    questionEl.children[0].innerHTML = currentQuestion.title;

    // removes question choices
    while (choicesEl.hasChildNodes()) {
        choicesEl.removeChild(choicesEl.lastChild);
    }

    // for loop to cycle through question choices
    for (i = 0; i < currentQuestion.answers.length; i++) {
        
        // dynamically creates buttons for answers
        var answerButton = document.createElement("button");
        answerButton.innerHTML = currentQuestion.answers[i];

        // shows answer options
        choicesEl.appendChild(answerButton);
    }
        
    // adds click event listener to each answer option
    choicesEl.children[0].addEventListener("click", function(event) {
        answerClick(choicesEl.children[0]);
    });
    choicesEl.children[1].addEventListener("click", function(event) {
        answerClick(choicesEl.children[1]);
    });
    choicesEl.children[2].addEventListener("click", function(event) {
        answerClick(choicesEl.children[2]);
    });
    choicesEl.children[3].addEventListener("click", function(event) {
        answerClick(choicesEl.children[3]);
    });
}




    
    



function showResults() {}

startQuiz();


// Clicking the 'Begin Quiz' button starts the quiz
startButton.addEventListener('click', startQuiz);

// Clicking submit button stores initials and score
submitButton.addEventListener('click', saveHighscore);