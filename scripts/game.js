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
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');


var score = 0;
var countdown = 500;
var questionSet = [...questions];           // copy the question set
var questionId;                             // variable to choose random question from questionSet
var question;                               // the random question choosen
var count = 0;     
var timerId;                                // keep track of question count
var highscores = [];                        // highscores are tracked in an array

startBtnEl.addEventListener('click', startGame);
questionBoxEl.addEventListener('click', checkAnswer);

fname.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.target.value);
})


function startGame() {
    startBtnEl.setAttribute('style', 'display:none');
    startTimer();
    renderNewQuestion();
    questionBoxEl.setAttribute('style', 'display:block');
}

function startTimer() {
    timerId = setInterval(function () {
        timerEl.textContent = countdown;
        countdown--;
    }, 1000);
}

function checkAnswer(event) {
    event.preventDefault();
    
    if(event.target.type === "submit"){
        if (event.target.textContent === question.answer) {
            //play sound
            score++;
        } else {
            //play sound
            console.log(`incorrect on ${question.question}`)
           countdown -= 10;
        }
        if(countdown < 0 || count !== questions.length){
            renderNewQuestion();
        } else {
            endGame();
        }
    }
}

//render question
function renderNewQuestion() {
    questionBoxEl.setAttribute("style", "display:block");
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

function endGame(){
    clearInterval(timerId);
    displayForm();
    if(countdown !== 0) {
        var highscoreForm = document.createElement("form");


        questionEl.textContent = `Quiz Complete! You answered ${score} questions correctly in ${countdown + 1} seconds!`
    } else {
        questionEl.textContent = `Out of time. You answered ${score} questions correctly. Try again.`;
    }
    btns.setAttribute("style", "display:none");

}

function displayForm() {
    highscoreForm.setAttribute("style", "display:block");
}




function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}



