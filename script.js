var timerEl = document.getElementById('countdown');
// // var myQuiz = document.querySelector("main");
// var StartBtn = document.getElementById("StartBtn");
// var results = document.getElementById("results");
// var questions = myQuiz();
var StartBtn = document.querySelector("#StartBtn");
var results = document.querySelector(".results");
var options = document.querySelector(".options");
var quesNum = 0;
var questionsDiv = document.querySelector(".questions");
var quiz_box = document.querySelector(".quiz_box");

function showQuestions() {
    console.log("showQuestions is working")
}


// const countdown = document.querySelector("#countdown");

// StartBtn.addEventListener("click", function(event) {

// });

// let questions = 0;
// let number = 1;
// let userScore = 0;

var restart = results.querySelector (".buttons .restart");
var quit = results.querySelector(".buttons .quit");

restart.addEventListener("click", function(event) {
    quiz_box.classList.add("activeQuiz");
    results.classList.remove("activeResults");
    userScore = 0;
    widthValue = 0;
    showQuestions(questions);
    // QCounter(number);
    console.log("restartBtn");
});
console.log("restartBtn");


quit.addEventListener("click", function(){
    window.location.reload();
});

// StartBtn.addEventListener("click", function(event) {
//     function startTimer(countdown)
// });

//countdown function for the timer
function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + "second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);

        }
    }, 1000);
}



//questions list array
let questions = [
    {
        num: 1, 
        question: "what is 9 + 10",
        answer: "21",
        options: [
            "20",
            "18",
            "19"
        ]
    },
    {
    num: 2, 
        question: "who is awesome",
        answer: "you",
        options: [
            "idk",
            "you",
            "everyone"
        ]
    },
]






//set up a function for the start button
StartBtn.addEventListener("click", function(event){
    console.log(event);
    countdown();
}) 
    



//for loop for the options of a question
for (let i = 0; i < options.length; i++) {
    options = [];
        for(letter in questions[i].options){
            questions.push(
         
            );
        }
    var choices = document.createElement("button");
    choices.setAttribute("type", "button");
}








// var myQuiz = [
//     {
//         question: "why?",
//         choices: ["yes", "no", "maybe",],
//         answer: "yes",
//     },
//     {
//         question: "who?",
//         choices: ["me", "you", "ApYr",],
//         answer: "ApYr",
//     },
//     {
//         question: "when?",
//         choices: ["now", "later", "never",],
//         answer: "later",
//     },
// ];

// countdown();
