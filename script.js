var timerEl = document.getElementById('countdown');
// var myQuiz = document.querySelector("main");
var StartBtn = document.getElementById("StartBtn");
var results = document.getElementById("results");

// var questions = myQuiz();


console.log("Var-created");

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







var myQuiz = [
    {
        question: "why?",
        choices: ["yes", "no", "maybe",],
        answer: "yes",
    },
    {
        question: "who?",
        choices: ["me", "you", "ApYr",],
        answer: "ApYr",
    },
    {
        question: "when?",
        choices: ["now", "later", "never",],
        answer: "later",
    },
];

countdown();
