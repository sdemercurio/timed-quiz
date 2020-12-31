// when the begin quiz button is pushed
//   then load the questions
//   and then start the timer
// when an answer is clicked
//   if the answer is correct
//     then pause timer and
//     log score and 
//     display "correct"
//     load next question
//   if the answer is wrong
//      pause the timer
//      deducting time
//      displaying "wrong"
//      load next question

// // startTimer
// pauseTimer
// logScore
// displayMessage
// loadNextQuestion

var questions = [
  {
    title: "Commonly Used data types DO NOT include:",
    choices: ["strings", "alerts", "booleans", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statment is enclosed within _____.",
    choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What javascipt method can we use to select an html element?",
    choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
    answer: "Both 1 and 3"
  },
  {
    title: "What html tag is NOT included in the HEAD tag?",
    choices: ["link", "meta", "title", "header"],
    answer: "header"
  },
  {
    title: "What attribute is used in html to decorate content?",
    choices: ["css", "class", "src", "style"],
    answer: "style"
  }


];

// Variables for each answer button

let score = document.getElementById('score');

let quizHeadings = document.getElementById("question-heading");
var quizContent = document.querySelector("#quiz-content");
var questionNumbers = 0
var numberOfQuestions = questions.length;
var answerChoices = questions[questionNumbers].choices;
var messageEl = document.getElementById("message");

let i = 0;
let scorePoints = 0
let finalScore = scorePoints
var timer = 10;
var endQuiz = document.getElementById("end");
var userScore = document.getElementById("user-score");
var bonusScore = document.querySelector("bonus-score");
var totalScore = document.querySelector("total-score");
var startBtn = document.getElementById("begin-quiz");
var quizEl = document.getElementById("quiz");
var infoEl = document.getElementById("main-info");
var initialsInput = document.getElementById("user-initials");
var submitBtn = document.getElementById("submitBtn");

// Get what's in storage or return an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;

// Disable submit button if user input is null
initialsInput.addEventListener("keyup", () => {
  submitBtn.disabled = !initialsInput.value;
});

submitHighScore = e => {
  console.log("clicked hte save button");
  e.preventDefault();

  const score = {
    score: scorePoints,
    initials: initialsInput.value
  };
  highScores.push(score);
  // Sort scores from highest to lowest. If score b is higher than score a, place score b first
  highScores.sort((a, b) => b.score - a.score)

  // Remove scores lower than the top 5
  highScores.splice(5);

  // Update local storage, update highscores, and stringify to save string in high scores.
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // Direct over to high scores page once user hits submit
  window.location.assign("highscores.html");
};


//turn highScores into string using JSON.parse
// localStorage.setItem("highScores", JSON.stringify([]));
// console.log(JSON.parse(localStorage.getItem("highScores")));

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitHighScore);





// Function to start the quiz upon clicking "Begin Quiz" button
function startQuiz() {
  infoEl.style.display = "none";
  quizEl.style.display = "block";

  var interval = setInterval(function () {
    document.getElementById('timer').innerHTML = timer;
    timer--;
    if (timer === 0) {
      clearInterval(interval);
      document.getElementById('timer').innerHTML = timer;
      stopQuiz();
    }
    if (numberOfQuestions > 5) {
      clearInterval(interval);
    }
  }, 1000);

  // Quiz questions

  quizAnswers();
}

// Function to start the timer
// function startTimer() {


// }

function answerMessage(type, message) {
  messageEl.textContent = message;
  messageEl.setAttribute("class", type);
}

// Append buttons to DOM
function quizAnswers() {
  for (var i = 0; i < answerChoices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = questions[0].choices[i];
    answerBtn.setAttribute("class", "btn btn-dark btn-block mt-2 d-block quiz-button");
    answerBtn.setAttribute("style", "width: 250px;");
    answerBtn.textContent = questions[questionNumbers].choices[i];
    quizContent.appendChild(answerBtn);

    // Quiz Questions
    quizHeadings.textContent = questions[0].title;

    // addEvent Listener for buttons and log 10 points if correct

    answerBtn.addEventListener('click', function (event) {
      if (event.target.textContent === questions[questionNumbers].answer) {

        answerMessage("correct", "Correct!");

        scorePoints += 10
        score.textContent = scorePoints

        // Then switch to next question.
        questionNumbers = questionNumbers + 1;

        if (questionNumbers <= (numberOfQuestions - 1)) {
          quizHeadings.textContent = questions[questionNumbers].title;

          quizContent.innerHTML = " ";

          quizAnswers();
        } else {
          stopQuiz();
        }

      } else {
        answerMessage("incorrect", "Wrong!");
        timer -= 15;

        // Then switch to next question.
        questionNumbers = questionNumbers + 1;

        if (questionNumbers <= (numberOfQuestions - 1)) {
          quizHeadings.textContent = questions[questionNumbers].title;

          quizContent.innerHTML = " ";
          quizAnswers();
        }

      }
    });
  }

};

function stopQuiz() {

  clearInterval(timer);

  quizEl.style.display = "none";
  endQuiz.style.display = "block";
  userScore.textContent = "You scored " + scorePoints + " points";
  userScore.setAttribute("style", "font-family: sofia-pro-condensed, sans-serif; font-weight: 400; font-style: normal; font-size: 50px; text-align: left; letter-spacing: -3px;")


  
}


