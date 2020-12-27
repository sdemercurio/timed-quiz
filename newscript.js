
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
let i = 0;
let quizHeadings = document.getElementById("question-heading");
var quizContent = document.querySelector("#quiz-content");
var questionNumbers = 0
var numberOfQuestions = questions.length;
var questionChoices = questions[questionNumbers].choices;
let scorePoints = 0
let gameClock = document.getElementById("timer");


var quizTimer = numberOfQuestions * 15;




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

  var timerInterval = setInterval(function () {
    gameClock.textContent = quizTimer;
    quizTimer--;

    // Once the timer hits zero, game is ended
    if (quizTimer <= 0) {
      clearInterval(timerInterval);
      gameClock.textContent = "0";
      quizContent.innerHTML = " ";
      questionNumbers = 0;
      quizContent.setAttribute("display", "none");
      infoEl.setAttribute("style", "display: block;");
      quizHeadings.textContent = "Your score is: " +  quizTimer;
      quizTimer = numberOfQuestions * 15;
  } 
  // Freeze clock if user runs through all the questions and end game
  else if (questionNumbers === 5) {
      clearInterval(timerInterval);
      // Reset elements so user can start a new game
      questionNumbers = 0;
      quizTimer = numberOfQuestions * 15;
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
}
//Function for correct answer message
// function correctAnswer() {
//   var correctMessage = document.quizContent.createElement("div");
//   correctMessage.setAttribute("class", "border-top mt-3 pt-3");
//   correctMessage.setAttribute("style", "font-size: 24px; font-family: Verdana, Tahoma, sans-serif;");
//   correctMessage.textContent = "Correct!";
//   quizContent.appendChild(correctMessage);
// }
//Function for incorrect message
// function incorrectAnswer() {
//   var incorrectMessage = document.quizContent.createElement("div");
//   incorrectMessage.setAttribute("class", "border-top mt-3 pt-3");
//   incorrectMessage.setAttribute("style", "font-size: 24px; font-family: Verdana, Tahoma, sans-serif;");
//   incorrectMessage.textContent = "Wrong!";
//   quizContent.appendChild(incorrectMessage);
// }

// addEvent Listener for buttons and log 10 points if correct

document.addEventListener('click', function (event) {
  if (event.target.matches(".quiz-button")) {

    if (event.target.textContent === questions[questionNumbers].answer) {


      scorePoints += 10
      score.textContent = scorePoints
      i += 1;
      // Then switch to next question and answer choices
      questionNumbers = questionNumbers + 1;

      if (questionNumbers <= (numberOfQuestions - 1)) {
        quizHeadings.textContent = questions[questionNumbers].question;

        quizContent.innerHTML = " ";
        quizAnswers();
      }

      // Deduct 15 seconds for wrong answer

    } else {
      quizTimer -= 15;
    }
  }
})

