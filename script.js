var timerEl = document.getElementById('countdown');
// // var myQuiz = document.querySelector("main");
// var StartBtn = document.getElementById("StartBtn");
// var results = document.getElementById("results");
// var questions = myQuiz();
const StartBtn = document.querySelector(".StartBtn button");
const quiz_box = document.querySelector(".quiz-box");
const results = document.querySelector(".results");
const options = document.querySelector(".options");
// const countdown = document.querySelector("#countdown");



// let questions = 0;
// let number = 1;
// let userScore = 0;

const restart = results.querySelector (".buttons .restart");
const quit = results.querySelector(".buttons .quit");

restart.addEventListener("click", function(event) {
    quiz_box.classList.add("activeQuiz");
    results.classList.remove("activeResults");
    userScore = 0;
    widthValue = 0;
    showQuestions(questions);
    QCounter(number);
    console.log("restartBtn");
});
console.log("restartBtn");


quit.addEventListener("click", function(){
    window.location.reload();
});

// StartBtn.addEventListener("click", function(event){
//     function startTimer(countdown)
// });


function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft = "second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);

        }
    }, 1000);
}

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

countdown();
