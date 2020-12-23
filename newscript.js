


function startQuiz() {
    x = document.getElementById("main-info");
    x.style.display = "none";
    x1 = document.getElementById("quiz");
    x1.style.display = "block";

    startTimer();
}

function startTimer() {
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