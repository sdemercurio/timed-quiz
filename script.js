// Create timer to update every time it loops through
var timerEl = document.querySelector("#time");
var mainEl = document.getElementById(".main");



// Timer

var timer = 30;
var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=timer;
  timer--;
  if (timer === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

/* Possible code for main content (heading, buttons, etc)

function sendMessage() { // Connect this to Heading
    timerEl.textContent = 

    mainEl.appendChild */
