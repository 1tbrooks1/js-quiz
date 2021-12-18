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


var questions = [
    {
        title: "blah",
        a: "bleh",
        b: "blad",
        c: "blas",
        d: "blaa",
        answer: "bleh"
    },
    {
        title: "joe byron",
        a: "hey",
        b: "now",
        c: "hey",
        d: "now",
        answer: "hey"
    },
    {
        title: "blaeff",
        a: "blah",
        b: "blah",
        c: "blah",
        d: "blah",
        answer: "blah"
    },
    {
        title: "bither",
        a: "blah",
        b: "blah",
        c: "blah",
        d: "blah",
        answer: "blah"
    },
]

var currentQuestionIndex = 0;
var timerId;
var time = 120;

var startQuiz = function() {
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");

    questionsEl.classList.add("show");

    timerId = setInterval(function() {
        time--;
        timerEL.innerHTML = time;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);

    getQuestion();
}

var getQuestion = function() {
    
    var currentQuestion = questions[currentQuestionIndex];

    questionTitle.innerHTML = currentQuestion.title;
    optionA.innerHTML = currentQuestion.a;
    optionA.addEventListener("click", checkAnswerA);
    
    
    questionTitle.innerHTML = currentQuestion.title;
    optionB.innerHTML = currentQuestion.b;
    optionB.addEventListener("click", checkAnswerB);
    
    questionTitle.innerHTML = currentQuestion.title;
    optionC.innerHTML = currentQuestion.c;
    optionC.addEventListener("click", checkAnswerC);
    
    questionTitle.innerHTML = currentQuestion.title;
    optionD.innerHTML = currentQuestion.d;
    optionD.addEventListener("click", checkAnswerD);
}

var checkAnswerA = function() { 
    if (optionA.innerHTML != questions[currentQuestionIndex].answer) {
    time -= 15;
    feedbackEl.innerHTML = "Wrong!"
    }
    else {
        feedbackEl.innerHTML = "Correct!"
        currentQuestionIndex++;
        getQuestion();
        console.log(currentQuestionIndex);
        if(currentQuestionIndex >= 3) {
            endQuiz();
         } else {
             getQuestion();
}
}
}
var checkAnswerB = function() { 
    if (optionB.innerHTML != questions[currentQuestionIndex].answer) {
        time -= 15;
        feedbackEl.innerHTML = "Wrong!";
        }
        else {
            feedbackEl.innerHTML = "Correct!"
            currentQuestionIndex++;
            getQuestion();
            console.log(currentQuestionIndex);
            if(currentQuestionIndex >= 3) {
                endQuiz();
             } else {
                 getQuestion();
}
}
}
var checkAnswerC = function() { 
    if (optionC.innerHTML != questions[currentQuestionIndex].answer) {
        time -= 15;
        feedbackEl.innerHTML = "Wrong!";
        }
        else {
            feedbackEl.innerHTML = "Correct!"
            currentQuestionIndex++;
            getQuestion();
            console.log(currentQuestionIndex);
            if(currentQuestionIndex >= 3) {
                endQuiz();
             } else {
                 getQuestion();
}
}
}
var checkAnswerD = function() { 
    if (optionD.innerHTML != questions[currentQuestionIndex].answer) {
        time -= 15;
        feedbackEl.innerHTML = "Wrong!"
    }
        else {
            feedbackEl.innerHTML = "Correct!"

            currentQuestionIndex++;
            
            getQuestion();
            
            console.log(currentQuestionIndex);
            
            if(currentQuestionIndex >= 3) {
                endQuiz();
             } else {
                 getQuestion();
}
}
}


/*var questionClick = function(answer) {
    
    if (answer != questions[currentQuestionIndex].answer) {

        time -= 15;

        feedbackEl.innerHTML = "Wrong!";
    }
    else {
        feedbackEl.innerHTML = "Correct!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setInterval(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length) {
        endQuiz();
     } else {
         getQuestion();
     }
}*/

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

    questionsEl.setAttribute("class", "hide");
}

var saveHighscore = function () {
    var initials = initialsEl.value;

    if (initials === " " || initials > 3) {
        alert("Try again! Please enter your initials between 2 - 3 characters!");
    }
    else {
        var highscores;
        if (JSON.parse(localStorage.getItem("highscores")) != null)
            highscores = JSON.parse(window.localStorage.getItem("highscores"));
        else
        highscores = [];
        
        var newScore = {
            initials: initials,
            score: time
        };

        highscores.push(newScore);

        localStorage.setItem("highscores", JSON.stringify(highscores));

        location.href = "highscores.html"
}
}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighscore);

