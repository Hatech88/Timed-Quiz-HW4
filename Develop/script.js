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
var startQuizBtnEl = document.querySelector(".startQuizBtn");



// Timer variables 
var timeLeft = 10;
var startScore = 0;
var timer = document.getElementById("timer");


// Now Lets creation the functions =========================

// starting the quiz function
function startQuiz() {

quiz.style.display = "block";


    var timeInterval = setInterval(function() {
    timer.textContent = "Timer:" + timeLeft + "s";
    timeLeft-=1;


    // If condtion 
    if(timeLeft === 0 || questions.length === currentQuestion + 1 ) {
        resRender();
        clearInterval(timeInterval);
        timer.textContent = "Time:" + timeLeft + "s";
        
    }
}, 1000);


// this function we created below and we call it within this one
    render();
};



// display Questions
var lastQuestion = questions.length -1;
var currentQuestion = 0;


// Function for displaying the question
// may want to use Hide class element 
// what do we use innterHTML for??
// using innterHTML and textContent to add content to an element/ tag
function render() {
    var hello = questions[currentQuestion];
    question.innerHTML = hello.question;
    choice1.innerHTML = hello.choice1;
    choice2.innerHTML = hello.choice2;
    choice3.innerHTML = hello.choice3;
    choice4.innerHTML = hello.choice4;
};



var score = 100;

// function to check the answers with if condition
function checkAnswer(answer) {
    
    // correct vs wrong messages
    if (questions[currentQuestion].correct == answer) {
        answerCheck.textContent = "Correct!"
    }
    else {
        answerCheck.textContent = "Wrong!"
        score -=10;
    }

    // In this if condition  we display the next question after choosing the answerwe say if user gone through all questions, display final score, resRender function
    if (questions.length === currentQuestion+1) {
        resRender();
        return;
    }
     else {
    currentQuestion++;
        render();
     };
};



// displaying the score function
// DOM element used to show the output on the browser 

// function resRender () {

//     if (timeLeft === 0 || questions.length -1) {
//         result.textContent = "Your final sore is " + score + ".";
//     }

// };


// adding the event listeners to the buttons


// Event Listener when user click the startQuiz Button. Add start the quiz function to
startQuizBtnEl.addEventListener("click", startQuiz);



//Capture Score and Initials 
userInfo.addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo").value;

    localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
    
    loadScores();
    });