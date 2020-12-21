// Create all necessary elements
var timerEl = document.querySelector("#time");
var mainEl = document.getElementById(".main");

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var info = document.createElement("p");
var btn = document.createElement("button");
var correct = document.createElement("div")
var wrong = document.createElement("div");
var scores = document.createElement("div");
var input = document.createElement("div");
var submit = document.createElementr("#submit");




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
