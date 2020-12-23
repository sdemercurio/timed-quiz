// Create all necessary elements
var eventType = document.querySelector("#event-type"); 
var timerEl = document.querySelector("#time");
var mainEl = document.getElementById(".main");
var mainInfoEl = document.getElementById("#main-info");
var quiz = document.getElementById("#quiz");


// Timer

function gameTimer() {
var timer = 5;
var interval = setInterval(function () {
  document.getElementById('timer').innerHTML = timer;
  --timer;
  if (timer === 0) {
    clearInterval(interval);
    document.getElementById('timer').innerHTML = timer;
  }
}, 1000);
}

function beginQuiz() {

  // console.log("Question Number: " + questionNumber);

  // Hide the default start menu
  mainInfoEl.setAttribute("style", "display: none;");
 // scoresMenu.setAttribute("style", "display: none;");
  quiz.setAttribute("style", "display: block");
 // enterInitialsMenu.setAttribute("style", "display: none;");
//  choicesContent.innerHTML = " ";
 // viewHighScoresLink.setAttribute("style", "display: none;");


  // Start countdown clock
  gameTimer();

  // Place first question in h1 and create buttons
  // of the multiple choice answers below
  // questionHeading.textContent = questions[questionNumber].title;
  // listChoices();

}

// Possible code for main content (heading, buttons, etc)


//  function switchVisible() {
//   if (document.getElementById('quiz') !== undefined) {

//       if (document.getElementById('quiz').style.display == 'block') {
//           document.getElementById('quiz').style.display = 'none';
//           document.getElementById('main-info').style.display = 'block';
//       } else {
//           document.getElementById('quiz').style.display = 'block';
//           document.getElementById('main-info').style.display = 'none';
//       }
//   }
// }

// quiz.addEventListener("click", switchVisible, false);




/*function sendMessage() { // Connect this to Heading
    timerEl.textContent =

    mainEl.appendChild */
