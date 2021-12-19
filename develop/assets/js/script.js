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


var questions = [
  {
    title: "blah",
    a: "bleh",
    b: "blad",
    c: "blas",
    d: "blaa",
    answer: "bleh",
  },
  {
    title: "joe byron",
    a: "hey",
    b: "now",
    c: "hey",
    d: "now",
    answer: "hey",
  },
  {
    title: "bing bong",
    a: "blah",
    b: "blah",
    c: "blah",
    d: "blah",
    answer: "blah",
  },
  {
    title: "take me out to dinner",
    a: "blah",
    b: "blah",
    c: "blah",
    d: "blah",
    answer: "blah",
  },
];

var currentQuestionIndex = 0;
var timerId;
var time = 120;

var startQuiz = function () {
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  highScoreScreen.classList.add("hide");

  questionsEl.classList.add("show");

  timerId = setInterval(function () {
    time--;
    timerEL.innerHTML = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  getQuestion();
};

var getQuestion = function () {
  var currentQuestion = questions[currentQuestionIndex];

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

var checkAnswer = function (event) {
  var optionClicked = event.target;

  console.log(optionClicked.innerHTML);

  if (optionClicked.innerHTML != questions[currentQuestionIndex].answer) {
    time -= 15;
    feedbackEl.innerHTML = "Wrong!";
  } else {
    feedbackEl.innerHTML = "Correct!";
  }

  feedbackEl.setAttribute("class", "feedback");
  setInterval(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 750);

  currentQuestionIndex++;

  if (currentQuestionIndex === 4) {
    endQuiz();
  } else {
    getQuestion();
  }
};

var endQuiz = function () {
  questionTitle.classList.add("hide");
  optionA.classList.add("hide");
  optionB.classList.add("hide");
  optionC.classList.add("hide");
  optionD.classList.add("hide");

  clearInterval(timerId);

  timerEL.innerHTML = time;

  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.setAttribute("class", " ");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.innerHTML = time;
};

var saveHighScore = function () {
  var initials = initialsEl.value;
  var highScores;

  if (initials.length === 0 || initials.length > 3) {
    alert("Try again! Please enter your initials between 2 - 3 characters!");
  } else {
    if (JSON.parse(localStorage.getItem("highScores")) != null)
      highScores = JSON.parse(window.localStorage.getItem("highScores"));
    else highScores = [];

    var newScore = {
      initials: initials,
      score: time,
    };

    highScores.push(newScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    displayHighScore();
  }
};

var displayHighScore = function () {
    highScores = JSON.parse(localStorage.getItem("highScores"));
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




};

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);
