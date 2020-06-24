# Quiz-Game

A simple JavaScript game that quizzes the user on the 50 state capitals. It gives you a time limit, and your final score is based on the time left on the clock when you complete the quiz. The question set comes from a seperate JavaScript file, that contains an array of objects, each object has 3 properties: a string containing the question, an array of string answer choices, and a correct answer string. 

When the question is rendered, the question is randomly drawn, and the answer choices are mixed up each time. 

Every correct answer is counted, and every incorrect answer takes away 10 seconds from your timer. 

Your score is saved in local storage, and if your score is in the top three, it will be saved in the high scores list with the user's name. 

Check out the final project https://danielalexvega.github.io/Quiz-Game/ 

This project was a homework assignment for the UT Coding Bootcamp. 


