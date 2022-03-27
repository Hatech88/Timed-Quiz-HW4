// Universal Variable Declarations 
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4= document.getElementById("4");
var finalScore= document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");






//The array of questions 
var questions = [
    { question: 'Commonly used data types DO NOT include:', 
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct: "3"
    },
    { question: "Arrays in JavaScript can be used to store ________.", 
    choice1 : "1. numbers and strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. all of the above",
    correct: "4"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choice1 : "1. quotes",
    choice2 : "2. curly brackets",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.", 
    choice1 : "1. commas",
    choice2 : "2. curly brackets",
    choice3 : "3. quotes",
    choice4 : "4. parenthesis",
    correct: "3"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
]  


// start Quiz variable 
var startQuizBtn = document.getElementById("startQuizBtn");



// Timer variables 
var timeLeft = 100;
var timer = document.getElementById("timer");



// Now Lets creation the functions =========================

// starting the quiz function
function startQuiz() {

var timerInterval = setInterval(function() {
    timer.textContent = "Timer:" + timeLeft + "s";
    timeLeft-=1;


    // If condtion 
    if(timeLeft === 0 || question.length === runningQuestionIndex + 1 ) {
        resultRender;
        clearInterval(timerInterval);
        timer.textContent = "Time:" + timeLeft + "s";
    }
}, 1000);


// this function we created below and we call it within this one
render();
};


// Function for displaying the question
// may want to use Hide class element 
// what do we use innterHTML for??
function render() {
    var hello = questions[runningQuestionIndex];
    question.innerHTML = hello.question;
    choice1.innerHTML = hello.choice1;
    choice2.innerHTML = hello.choice2;
    choice3.innerHTML = hello.choice3;
    choice4.innerHTML = hello.choice4;
};

// function for answers 
function checkAnswer (answer)




// Event Listener when user click the startQuiz Button. Add start the quiz function to
startQuiz.addEventListener("click", )