// const question = document.querySelector("#question");
// // const answerChoice = Array.from(document.querySelector("#quiz-button"));
// const scoreText = document.querySelector("#score")
// //const score = document.querySelector("#score")
// let currentQuestion = {}
// let correctAnswer = true
// let score = 0
// let otherQuestions = []


// when the begin quiz button is pushed
//   then load the questions
//   and then start the timer
// when an answer is clicked
//   if the answer is correct
//     then pause timer and
//     log score and 
//     display "correct"
//     load next question
// /*   if the answer is wrong
//        pause the timer
//        deducting time
//        displaying "wrong"
// */     load next question
      
      
     

      // // startTimer
      // pauseTimer
      // logScore
      // displayMessage
      // loadNextQuestion
let i = 0; 
let scorePoints = 0
     

var timer = 5;

var questions = [
  {
    question: "The first index of an array is ____.",
    choices: ["0", "1", "6", "custom"],
    answer: "0"
  }, 
  {
    question: "Javascript was created by ____.",
    choices: ["Jeffrey Javascript", "Brendan Eich", "Who F. Cares Jr.", "Ned Flanders"],
    answer: "Brendan Eich"
  }, 
  {
    question: "What is not an example of an HTML event?",
    choices: ["User hitting a key", "User clicking a mouse", "Web page loading", "When my dad yells at me"],
    answer: "When my dad yells at me"
  }, 
  {
    question: "What are Javascript's Boolean data type values?",
    choices: ["skibby and hibby", "property and key name", "Tom and Jerry", "true and false"],
    answer: "true and false"
  }, 
  {
    question: "Javascript variables can be ______ ",
    choices: ["globally scoped", "function scoped", "locally scoped", "all of the above"],
    answer: "all of the above"
  }, 

   
];

// Variables for each answer button

let answerAButton = document.getElementById('0');
let answerBButton = document.getElementById('1');
let answerCButton = document.getElementById('2');
let answerDButton = document.getElementById('3');
let questionPrompt = document.getElementById('question'); 

let score = document.getElementById('score');

// Display each question and the answer options.

function displayNextQuestion() {
  questionPrompt.textContent = questions[0].question;
  answerAButton.textContent = questions[0].choices[0];
  answerBButton.textContent = questions[0].choices[1];
  answerCButton.textContent = questions[0].choices[2];
  answerDButton.textContent = questions[0].choices[3];
}

// Here is where I began to render my elements but changed my apprach due to time and wanting to get more completed to submit.

// var quizContent = document.querySelector("#quiz-content");
// var answerBtn = document.createElement("button");
// answerBtn.innerHTML = questions[0].choices[0];
// answerBtn.setAttribute("class", "btn btn-dark btn-block mt-2 d-block quiz-button");
// quizContent.appendChild(answerBtn);

answerAButton.addEventListener('click', function(event) {

  console.log(event.target.textContent === questions[0].answer);
 if (event.target.textContent === questions[0].answer) {
    scorePoints += 10
    score.textContent = scorePoints
 }
  i++; 
  
})
answerBButton.addEventListener('click', function(event) {
  console.log(event.target.value)
  i+=1; 
  console.log(i)
})
answerCButton.addEventListener('click', function(event) {
  console.log(event.target.value)
})
answerDButton.addEventListener('click', function(event) {
 console.log(event.target.value)
})



// Function to start the quiz upon clicking "Begin Quiz" button
function startQuiz() {
    var infoEl = document.getElementById("main-info");
    infoEl.style.display = "none";
    var quizEl = document.getElementById("quiz");
    quizEl.style.display = "block";

    startTimer();
    displayNextQuestion(); 

    answerChoices();

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

function answerChoices() {
    
}

    