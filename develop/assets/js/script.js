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
var currentQuestionIndex = 0;

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
    
    

}

function showResults() {}

startQuiz();


// Clicking the 'Begin Quiz' button starts the quiz
startButton.addEventListener('click', startQuiz);

// Clicking submit button stores initials and score
submitButton.addEventListener('click', saveHighscore)