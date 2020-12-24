
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
let i = 0;
let scorePoints = 0


var timer = 60;

var questions = [
  {
    question: "Commonly Used data types DO NOT include:",
    choices: ["stings", "alerts", "booleans", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statment is enclosed within _____.",
    choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "What javascipt method can we use to select an html element?",
    choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
    answer: "Both 1 and 3"
  },
  {
    question: "What html tag is NOT included in the HEAD tag?",
    choices: ["link", "meta", "title", "header"],
    answer: "header"
  },
  {
    question: "What attribute is used in html to decorate content?",
    choices: ["css", "class", "src", "style"],
    answer: "style"
  }


];

// Variables for each answer button

let answerAButton = document.getElementById('0');
let answerBButton = document.getElementById('1');
let answerCButton = document.getElementById('2');
let answerDButton = document.getElementById('3');
let questionPrompt = document.getElementById('question');

let score = document.getElementById('score');



// Function to start the quiz upon clicking "Begin Quiz" button
function startQuiz() {
  var infoEl = document.getElementById("main-info");
  infoEl.style.display = "none";
  var quizEl = document.getElementById("quiz");
  quizEl.style.display = "block";

  startTimer();
  displayNextQuestion();

  // answerChoices();

}

// Display each question and the answer options.

function displayNextQuestion() {
  questionPrompt.textContent = questions[0].question;
  answerAButton.textContent = questions[0].choices[0];
  answerBButton.textContent = questions[0].choices[1];
  answerCButton.textContent = questions[0].choices[2];
  answerDButton.textContent = questions[0].choices[3];


// Here is where I began to render my elements but changed my apprach due to time and wanting to get more completed to submit.

// var quizContent = document.querySelector("#quiz-content");
// var answerBtn = document.createElement("button");
// answerBtn.innerHTML = questions[0].choices[0];
// answerBtn.setAttribute("class", "btn btn-dark btn-block mt-2 d-block quiz-button");
// quizContent.appendChild(answerBtn);

answerAButton.addEventListener('click', function (event) {
  if (event.target.textContent === questions[0].answer) {
    scorePoints += 10
    score.textContent = scorePoints
    i++;
  }

})

answerBButton.addEventListener('click', function (event) {
  if (event.target.textContent === questions[0].answer) {
    scorePoints += 10
    score.textContent = scorePoints
    i += 1;
  }
})

answerCButton.addEventListener('click', function (event) {
  if (event.target.textContent === questions[0].answer) {
    scorePoints += 10
    score.textContent = scorePoints
    i += 1;
  }
})

answerDButton.addEventListener('click', function (event) {
  if (event.target.textContent === questions[0].answer) {
    scorePoints += 10
    score.textContent = scorePoints
    i += 1;
  }
})
};


// Function to start the timer

function startTimer() {

  var interval = setInterval(function () {
    document.getElementById('timer').innerHTML = timer;
    --timer;
    if (timer < 10) {
      clearInterval(interval);
      document.getElementById('timer').innerHTML = "0" + timer;
    }
  }, 1000);

}

// function answerChoices() {



