
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
var timer = 10;




// Function to start the quiz upon clicking "Begin Quiz" button
function startQuiz() {
  var infoEl = document.getElementById("main-info");
  infoEl.style.display = "none";
  var quizEl = document.getElementById("quiz");
  quizEl.style.display = "block";

  startTimer();

  // displayNextQuestion();

  // Quiz questions
  quizHeadings.textContent = questions[0].title;
  quizAnswers();
}

// Function to start the timer
function startTimer() {

  var interval = setInterval(function () {
    document.getElementById('timer').innerHTML = timer;
    timer--;
    if (timer == 0) {
      clearInterval(interval);
      document.getElementById('timer').innerHTML = timer;
    }
  }, 1000);

}

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
    answerBtn.textContent = questions[questionNumbers].choices[i];
    quizContent.appendChild(answerBtn);

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
        }

      } else {
        answerMessage("incorrect", "wrong!");
        scorePoints += 10
        score.textContent = scorePoints

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

