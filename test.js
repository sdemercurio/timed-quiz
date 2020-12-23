var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
     if (seconds >0 ) {
         seconds--;
     } else {
         clearInterval(timer);
         alert("You type X WPM");
     }
}
document.getElementById("textarea").onkeypress = function() {
  if(!timer) {
    timer = window.setInterval(function() {
      myFunction();
    }, 1000);
  }
}

document.getElementById("timer").innerHTML="1:00"; 