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
    { question: 'Inside which HTML element do we put the JavaScript?', 
    choice1 : "1. js",
    choice2 : "2. javascript",
    choice3 : "3. scripting",
    choice4 : "4. script",
    correct: "4"
    },
    { question: "Commonly used data types DO NOT include:", 
    choice1 : "1. strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. alerts",
    correct: "4"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choice1 : "1. quotes",
    choice2 : "2. curly brackets",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "The first index of an array is ________.", 
    choice1 : "1. first",
    choice2 : "2. 1",
    choice3 : "3. 0",
    choice4 : "4. start",
    correct: "3"
    },
    { question: "String values must be enclosed within _____ when being assigned to variables.", 
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
    { question: "String values must be enclosed within _____ when being assigned to variables.", 
    choice1 : "1. commas",
    choice2 : "2. quotes",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "Arrays in JavaScript can be used to store _____.", 
    choice1 : "1. booleans",
    choice2 : "2. numbers",
    choice3 : "3. Different elements",
    choice4 : "4. strings",
    correct: "3"
    },
    { question: "To see if two variables are equal in an if / else statement you would use ____.", 
    choice1 : "1. if i = 5 then",
    choice2 : "2. if(i == 5)",
    choice3 : "3. if i = 5",
    choice4 : "4. if i == 5 then",
    correct: "4"
    },
    { question: "Which event occurs when the user clicks on an HTML element?", 
    choice1 : "1. onmouseclick",
    choice2 : "2. onmouseover",
    choice3 : "3. onchange",
    choice4 : "4. onclick",
    correct: "4"
    }]  




// start Quiz variable 
var startQuizBtnEl = document.querySelector(".startQuizBtn");



// Timer variables 
var timeLeft = 100;
var timer = document.getElementById("timer");
var timerId;

// Now Lets creation the functions =========================

// starting the quiz function
function startQuiz() {

quiz.style.display = "block";
startQuizBtnEl.style.display = "none";
 timerId = setInterval(timeFunc, 1000);
render();
};

// This is the old time fuction I used initially 
//     var timeInterval = setInterval(function() {
//     timer.textContent = "Timer:" + timeLeft + "s";
//     timeLeft-=1;

//     // If condtion 
//     if(timeLeft === 0 || questions.length === currentQuestion + 1 ) {
//         resRender();
//         clearInterval(timeInterval);
//         timer.textContent = "Time:" + timeLeft + "s";
        
//     }
// }, 1000);

// Started a new simpler time function. It started by decrementing the timeLeft and display it on the screen. 
// it has an if condition that call the endQuiz function when the timeLeft reaches zero 
function timeFunc () {
    timeLeft --;
    timer.textContent = timeLeft;
    if (timeLeft === 0 ) {
        endQuiz();

    }

}

// this function we created below and we call it within this one




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


// function to end the quiz and display the score
function endQuiz () {
    quiz.style.display = "none";
    finalScore.style.display = "block";
    
        // to stop the timer when it hit zero
        clearInterval(timerId);
}

var score = 100;

// function to check the answers with if condition
function checkAnswer(answer) {
    
    // correct vs wrong messages
    if (questions[currentQuestion].correct == answer) {
        answerCheck.textContent = "Correct!"
    }
    else {
        answerCheck.textContent = "Wrong!"
        score = score-10;
    }

    // In this if condition  we display the next question after choosing the answer. we say if user gone through all questions, display final score, resRender function
    if (questions.length === currentQuestion+1) {
        resRender();
        return;
    }
     else {
    currentQuestion++;
        render();
        if(currentQuestion === questions.length) {
            endQuiz();
        }

     };
};



// displaying the score function
// DOM element used to show the output on the browser 

function resRender () {

    if (timeLeft === 0 || questions.length -1) {
        result.textContent = "Your final sore is " + score + ".";
    }

};


// adding the event listeners to the buttons


// Event Listener when user click the startQuiz Button. Add start the quiz function to
startQuizBtnEl.addEventListener("click", startQuiz);





    // High Score Section ============================
    var clearBtn = document.getElementById("cleatBtn");
    var backBtn = document.getElementById("goBackBtn");



//Capture Score and Initials 
userInfo.addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo").value;


    // localStorage can only store strings, so using JSON.stringify is a way to store JSON object in string form
    // this will store the initials and scores in local storage
    localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
    localStorage.setItem("score", JSON.stringify(score));
    
    loadScores();
    });



// create an empty array and add to it the score ad the initials 
    var finalScore = [];


    // I will need to get all that data out from localStorage 
    //then use javascript to display it on the page by manipulating the DOM
var loadScores = function() {

//  need to use getItem or JSON.parse when you retrive data from localStorage
    var finalScore = localStorage.getItem("contactInfo, score");

    // use for loop to create 
    for ( var i =0; i < finalScore.length; i++) {
        var finalScore = finalScore[i];
        var finalList = document.createElement("li")
        
        finalList.textContent = finalScore;
    }

    finalScore.push(finalScore);

    if (!finalScore) {
        return alert("Invalid")
    }


};



// localStroage.clear: The clear() method of the Storage interface clears all keys stored in a given Storage object
var clearStorage = function() {
    localStorage.clear();
}

// adding event listener to the clear button
clearBtn.addEventListener("click", clearStorage);