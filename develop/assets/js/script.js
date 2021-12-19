// variables to access DOM elements
var startButton = document.getElementById("start");
var timerEL = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var submitButton = document.getElementById("submit");
var questionTitle = document.getElementById("question-title");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var optionButton = document.querySelector("#choices");
var highScoreScreen = document.getElementById("highscore-screen");
var scoresList = document.getElementById("score-list");
var highScoreButton = document.getElementById("view-highscores");
var clearScores = document.getElementById("clear-scores");
var playAgain = document.getElementById("play-again")

// questions, options, and correct answer for quiz 
var questions = [
  {
    title: "Which of the following functions is a valid type of function that javascript supports?",
    a: "Named Function",
    b: "Anonymous Function",
    c: "Both A and B",
    d: "None of the above",
    answer: "Both A and B",
  },
  {
    title: "Which method out of the choices below returns the character at the specified index?",
    a: "characterAt()",
    b: "getCharAt()",
    c: "charAt()",
    d: "None of the above",
    answer: "charAt()",
  },
  {
    title: "Out of the following choices below, which of these is not a mouse event?",
    a: "onmousescroller",
    b: "onclick",
    c: "onmouseover",
    d: "onmousemove",
    answer: "onmousescroller",
  },
  {
    title: "When it comes to mouse events, the opposite of onmouseover is_____?",
    a: "onmouseoff",
    b: "onmouseout",
    c: "onmouseunder",
    d: "onnotmouseover",
    answer: "onmouseout",
  },
  {
    title: "Which method returns the string starting at the specified position?",
    a: "substr()",
    b: "getSubstring()",
    c: "slice()",
    d: "None of the answers above",
    answer: "substr()",
  },
];

// variable to control flow of questions
var currentQuestionIndex = 0;

// variable for timer
var timerId;
var time = 120;

// this function starts the quiz after a click
var startQuiz = function () {

  // hides home screen
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");

  // hides highscore screen
  highScoreScreen.classList.add("hide");

  // displays questions
  questionsEl.classList.add("show");

  // starts timer and makes it tick down in increments of 1 second 
  timerId = setInterval(function () {
    time--;
    timerEL.innerHTML = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);


// function to grab the first question
  getQuestion();
};


// function to start getting questions
var getQuestion = function () {

  // points at current question in the index
  var currentQuestion = questions[currentQuestionIndex];

  // displays the title and options to each question
  questionTitle.innerHTML = currentQuestion.title;
  optionA.innerHTML = currentQuestion.a;
  optionA.addEventListener("click", checkAnswer);

  questionTitle.innerHTML = currentQuestion.title;
  optionB.innerHTML = currentQuestion.b;
  optionB.addEventListener("click", checkAnswer);

  questionTitle.innerHTML = currentQuestion.title;
  optionC.innerHTML = currentQuestion.c;
  optionC.addEventListener("click", checkAnswer);

  questionTitle.innerHTML = currentQuestion.title;
  optionD.innerHTML = currentQuestion.d;
  optionD.addEventListener("click", checkAnswer);
};


// function to compare user choice to correct answer
var checkAnswer = function (event) {
  
  // takes the info from the choice the user picked 
  var optionClicked = event.target;

  // determines feedback based off user answer choice
  if (optionClicked.innerHTML != questions[currentQuestionIndex].answer) {
    time -= 15;
    feedbackEl.innerHTML = "Wrong!";
  } else {
    feedbackEl.innerHTML = "Correct!";
  }

  // sets a time limit for feedback to appear on the screen
  feedbackEl.setAttribute("class", "feedback");
  setInterval(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 800);

  // moves to the next question
  currentQuestionIndex++;

  // determines if quiz should continue or end
  if (currentQuestionIndex === 5) {
    endQuiz();
  } else {
    getQuestion();
  }
};

// function to bring up the end screen of the quiz
var endQuiz = function () {

  // hides elements on the screen
  questionTitle.classList.add("hide");
  optionA.classList.add("hide");
  optionB.classList.add("hide");
  optionC.classList.add("hide");
  optionD.classList.add("hide");


  // stops timer
  clearInterval(timerId);

  timerEL.innerHTML = time;
// displays end of quiz screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.setAttribute("class", " ");

// sets users score to the time on the clock
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.innerHTML = time;
};

// function to save highscore
var saveHighScore = function () {
  
  // setting variables for user initials and highscore
  var initials = initialsEl.value;
  var highScores;

  // criteria for input of initials
  if (initials.length === 0 || initials.length > 3) {
    alert("Try again! Please enter your initials between 2 - 3 characters!");
  } else {
    if (JSON.parse(localStorage.getItem("highScores")) != null)
      highScores = JSON.parse(window.localStorage.getItem("highScores"));
    else highScores = [];

// setting object to take in initials and score
    var newScore = {
      initials: initials,
      score: time,
    };

    // pushes object into array
    highScores.push(newScore);

    // saves user info to browser
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // function to display screen for high scores
    displayHighScore();
  }
};

var displayHighScore = function () {
    highScores = JSON.parse(localStorage.getItem("highScores"));

    // hides elements on screen
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.classList.add("hide");
    highScoreScreen.classList.add("show");

    if(highScores != null){
        var listOfScores = document.createElement("ol")
        listOfScores.className = "score-list";

    for(i = 0; i < highScores.length; i++){
        // create li tag for each high score
        var scoreLi = document.createElement("li");
        scoreLi.textContent = highScores[i].initials + " - " + highScores[i].score;
        // display on page
        document.getElementById("score-list").appendChild(scoreLi);
      }
    }
}

function clear () {

  // clears data in local storage
    localStorage.clear();

    // hides elements on screen
    scoresList.setAttribute("class", "hide");
}


// buttons to start events
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

highScoreButton.addEventListener("click", displayHighScore);

playAgain.addEventListener("click", function() {
    location.href = "index.html"
});

clearScores.addEventListener("click", clear);

