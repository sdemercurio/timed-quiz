// Create all necessary elements
var timerEl = document.querySelector("#time");
var mainEl = document.getElementById(".main");
var h1El = document.querySelectorAll("h1");
var h2El = document.querySelectorAll("h2");
var btn = document.querySelectorAll("button");
var scores = document.querySelectorAll("div");
var input = document.querySelectorAll("div");
var info = document.querySelectorAll("p");
var submit = document.querySelector("#submit");



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

// Possible code for main content (heading, buttons, etc)
var btn = document.createElement("button");
btn.textContent = "answer";

document.body.appendChild(btn);


/*function sendMessage() { // Connect this to Heading
    timerEl.textContent = 

    mainEl.appendChild */
