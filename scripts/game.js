const timerEl = document.querySelector(".timer");
const gameTitleEl = document.querySelector(".game-title");
const gameDiscriptionEl = document.querySelector(".game-discription");
const startBtnEl = document.querySelector(".startBtn");
const questionBoxEl = document.querySelector(".questionBox");
const questionEl = document.querySelector("#question");
const btns = document.querySelector("#btn-container");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
const highscoreForm = document.querySelector("#highscore-container");
const submitBtn = document.querySelector('#submitBtn');


var score;
var countdown;
var questionSet;           // copy the question set *this happens in resetGame();
var questionId;                             // variable to choose random question from questionSet
var question;                               // the random question choosen
var count;
var timerId;                                // keep track of question count
var highScores;                        // highscores are tracked in an array
var playerNames;
var userName;
var playerId = 0;


//first thing I need to do is load the highScores, load the names, and load the playerId

function loadData() {
    //load names into an array from local storage
    if (localStorage.getItem('playerId') !== null) {
        playerId = parseInt(localStorage.getItem('playerId'));
    } 

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

startBtnEl.addEventListener('click', startGame);  //the button to start the game
questionBoxEl.addEventListener('click', checkAnswer);  //the button to check answers
highscoreForm.addEventListener('submit', function () { event.preventDefault(); });  
submitBtn.addEventListener('click', validateForm);  //the button to submit a name

//function to reset the game
function resetGame() {
    score = 0;
    countdown = 500;
    questionSet = [...questions];
    count = 0;
    userName = '';
}

function startGame() {
    resetGame();
    renderNewQuestion();
    questionBoxEl.setAttribute('style', 'display:block');
    btns.setAttribute("style", "display:block");
    startTimer();
    startBtnEl.setAttribute('style', 'display:none');
}

function startTimer() {
    timerId = setInterval(function () {
        timerEl.textContent = countdown;
        countdown--;
    }, 1000);
}

//when I'm done checking answers, I end the game
function checkAnswer(event) {
    event.preventDefault();

    if (event.target.type === "submit") {
        if (event.target.textContent === question.answer) {
            //play sound
            score++;
        } else {
            //play sound
            countdown -= 20;
        }
        if (countdown > 0 && count !== questions.length) {
            renderNewQuestion();
        } else {
            endGame();
        }
    }
}

//render question   *************** Check this ***************************
function renderNewQuestion() {
    //questionBoxEl.setAttribute("style", "display:block");     // I don't think I need this line
    count++;
    //pick a random question
    questionId = Math.floor(Math.random() * questionSet.length);
    //remove the question from the questionSet array
    question = questionSet.splice(questionId, 1)[0];

    //console.log(question);  //this is an object

    questionEl.textContent = question.question;
    // how do I randomize the selection
    shuffle(question.choices);

    choiceA.textContent = question.choices[0];
    choiceB.textContent = question.choices[1];
    choiceC.textContent = question.choices[2];
    choiceD.textContent = question.choices[3];
}

function endGame() {
    clearInterval(timerId);   //stop the clock
    toggleForm();             // add the form
    countdown++;
    if (countdown !== 0) {
        questionEl.textContent = `Quiz Complete! You answered ${score} questions correctly in ${countdown} seconds!`;
    } else {
        questionEl.textContent = `Out of time. You answered ${score} questions correctly. Try again.`;
    }
    btns.setAttribute("style", "display:none");

}

function toggleForm() {
    if (highscoreForm.style.display === '' || highscoreForm.style.display === 'none') {
        highscoreForm.style.display = 'block';
    } else {
        highscoreForm.style.display = 'none';
    }
}

function validateForm(event) {
    event.preventDefault();
    let fn = document.forms['highscoreForm']['fname'].value;
    let ln = document.forms['highscoreForm']['lname'].value;
    userName = `${fn} ${ln}`;
    console.log(userName);
    //check if the user makes the top score
    let userIndex = compareScores();
    console.log(userIndex);
    if(userIndex> -1) {
        highScores.splice(userIndex, 0, countdown);
        highScores.length = 3;
        playerNames.splice(userIndex, 0, userName);
        playerNames.length = 3;
        storeUser();
    }
    
    toggleForm();
    window.location.href = 'highscores.html';
}

function storeUser() {
    playerId++;
    localStorage.setItem('playerId', playerId);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    localStorage.setItem('playerNames', JSON.stringify(playerNames));
    console.log('user stored');
}


//should return an index if it works, and -1 if it doesn't
function compareScores() {
    let userIndex = -1;
    for(let i = 0; i < highScores.length; i++) {
        if (countdown > highScores[i]) {
            console.log("yup");
            return i;
        }
    }
    return userIndex;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}



