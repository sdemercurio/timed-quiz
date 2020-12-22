// Create all necessary elements
var eventType = document.querySelector("#event-type"); 
var timerEl = document.querySelector("#time");
var mainEl = document.getElementById(".main");
var mainInfoEl = document.querySelectorAll("#main-info");
var beginQuizEl = document.querySelectorAll("#begin-quiz");



// Timer

var timer = 5;
var interval = setInterval(function () {
  document.getElementById('timer').innerHTML = timer;
  --timer;
  console.log(timer);
  if (timer === 0) {
    clearInterval(interval);
    document.getElementById('timer').innerHTML = timer;
  }
}, 1000);

// Possible code for main content (heading, buttons, etc)

function switchVisible() {
  if (document.getElementById('begin-quiz') !== undefined) {

      if (document.getElementById('begin-quiz').style.display == 'block') {
          document.getElementById('begin-quiz').style.display = 'none';
          document.getElementById('main-info').style.display = 'block';
      } else {
          document.getElementById('begin-quiz').style.display = 'block';
          document.getElementById('main-info').style.display = 'none';
      }
  }
}

document.getElementById ("button").addEventListener ("click", switchVisible, false);



/*function sendMessage() { // Connect this to Heading
    timerEl.textContent =

    mainEl.appendChild */
