
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
    choices: ["strings", "alerts", "booleans", "numbers"],
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
var infoEl = document.getElementById("main-info");
var quizEl = document.getElementById("quiz");
let score = document.getElementById('score');

let quizHeadings = document.getElementById("question-heading");
var quizContent = document.querySelector("#quiz-content");
var questionNumbers = 0
var numberOfQuestions = questions.length;
var questionChoices = questions[questionNumbers].choices;




// Function to start the quiz upon clicking "Begin Quiz" button
function startQuiz() {
  infoEl.style.display = "none";
  quizEl.style.display = "block";

  startTimer();

  // displayNextQuestion();

  // Quiz questions
  quizHeadings.textContent = questions[0].question;
  quizAnswers();
}

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

// Create, style, and append answer buttons
function quizAnswers() {
  for (var i = 0; i < questionChoices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = questions[0].choices[i];
    answerBtn.setAttribute("class", "btn btn-dark btn-block mt-2 d-block quiz-button");
    answerBtn.textContent = questions[questionNumbers].choices[i];
    quizContent.appendChild(answerBtn);
  }
};
//Function for correct answer message
function correctAnswer() {
  var correctMessage = document.createElement("div");
  correctMessage.setAttribute("class", "border-top mt-3 pt-3");
  correctMessage.setAttribute("style", "font-size: 24px; font-family: Verdana, Tahoma, sans-serif;");
  correctMessage.textContent = "You are correct!";
  quizEl.appendChild(correctMessage);
}
//Function for incorrect message
function incorrectAnswer() {
  var incorrectMessage = document.createElement("div");
  incorrectMessage.setAttribute("class", "border-top mt-3 pt-3");
  incorrectMessage.setAttribute("style", "font-size: 24px; font-family: Verdana, Tahoma, sans-serif;");
  incorrectMessage.textContent = "Wrong!";
  quizEl.appendChild(incorrectMessage);
}

// addEvent Listener for buttons and log 10 points if correct

document.addEventListener('click', function (event) {
  if (event.target.matches(".quiz-button")) {

    if (event.target.textContent === questions[questionNumbers].answer) {


      scorePoints += 10
      score.textContent = scorePoints
      i += 1;
      correctAnswer();
      // Then switch to next question and answer choices
      questionNumbers = questionNumbers + 1;

      if (questionNumbers <= (numberOfQuestions - 1)) {
        quizHeadings.textContent = questions[questionNumbers].question;

        quizContent.innerHTML = " ";
        quizAnswers();
      }

    } else if (event.target.textContent !== questions[questionNumbers].answer) {

    incorrectAnswer();

    questionNumbers = questionNumbers + 1;
  
    if (questionNumbers <= (numberOfQuestions - 1)) {
      quizHeadings.textContent = questions[questionNumbers].question;
  
      quizContent.innerHTML = " ";
      quizAnswers();
      
    }
  }
}

})

