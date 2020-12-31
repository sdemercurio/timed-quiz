const clearScores = document.getElementById("clear-scores");
const highScoresList = document.getElementById("highscores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

function clearHighScores() {
    highScoresList.innerHTML = "";
    //Clears all local storage
    // localStorage.clear();

};

clearScores.addEventListener("click", clearHighScores);


// map will get a reference to each high score
//inner.HTML to display the scores
highScoresList.innerHTML =
    highScores.map(score => {
        // create an li of each score
        return (`<li class="high-score">${score.initials}-${score.score}</li>`);
    })
    // join elements to a string 
        .join("");