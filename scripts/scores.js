const highScoresEl = document.querySelector('#highScores-container');


var highScores;
var playerNames;

function loadData() {
    //load names into an array from local storage
    if (localStorage.getItem('highScores') !== null) {
        highScores = JSON.parse(localStorage.getItem('highScores'));
    } else {
        highscoreForm = [0, 0, 0];
    }
    if (localStorage.getItem('playerNames') !== null) {
        playerNames = JSON.parse(localStorage.getItem('playerNames'));
    } else {
        playerNames = ['', '', ''];
    }
}

loadData();
displayScores();

function displayScores() {
    for(let i = 0; i < highScores.length; i++) {
        let scoreEl = document.createElement('div');
        scoreEl.textContent = `${playerNames[i]} - ${highScores[i]} points`;
        scoreEl.setAttribute('class', 'scoreEl');
        highScoresEl.append(scoreEl);
    }
}