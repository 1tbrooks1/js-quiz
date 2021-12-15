var startButton  = document.getElementById('start');
var questionEl  = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var timerEl = document.getElementById('timer');
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

startButton.addEventListener('click', startQuiz);