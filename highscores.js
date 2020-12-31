
const highScoresList = document.getElementById("highscores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// map will get a reference to each high score
//inner.HTML to display the scores
highScoresList.innerHTML =
    highScores.map(score => {
        // create an li of each score
        return (`<li class="high-score">${score.initials}-${score.score}</li>`);
    })
    // join elements to a string 
        .join("");


