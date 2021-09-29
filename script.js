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
var feedbackMsg = document.querySelector(".feedback");
var numCorrect = 0;
var length = 4;
var score = document.getElementById(".points");

// let numCorrect = document.getElementById(".points");

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
        question: "At what weight must drones be registered?",
        answer: ".55-55lbs",
        options: [
            ".55-55lbs",
            "1-100lbs",
            "over 5lbs"
        ]
    },
    {
    num: 2, 
        question: "How old do you need to be to register?",
        answer: "13",
        options: [
            "13",
            "21",
            "18"
        ]
    },
    {
        num: 3, 
        question: "What is the legal top speed of a drone?",
        answer: "100mph",
        options: [
            "60mph",
            "25mph",
            "100mph"
        ]
    },
    {
    num: 4, 
        question: "What is +TSRA BR?",
        answer: "Weather",
        options: [
            "Distance",
            "Weather",
            "Serial Number"
        ]
    },
    {
        num: 5, 
            question: "SM in 3/4SM stands for?",
            answer: "Statute Miles",
            options: [
                "Standard Meters",
                "Square Miles",
                "Statute Miles"
            ]
        },
]


function questionRender() {
    var question = document.createElement("p")
    question.textContent = questions[quesNum].question;
    questionsDiv.appendChild(question);
    for (let i = 0; i < questions[quesNum].options.length; i++) {

        // options = [];
        //    for(letter in questions[i].options){
        //        questions.push(    
        //        );
        //    }




        var choices = document.createElement("button");
        choices.setAttribute("type", "button");
        choices.innerHTML = questions[quesNum].options[i];

        // var userChoice = choices.innerHTML;


        // choices.onclick = evaluateAnswer();
        options.appendChild(choices);
        choices.addEventListener("click", function(){

            console.log(this.textContent);
           
            // console.log(score[userScore]);
        // if else statement to check whether answer is correct
        console.log(questions[quesNum].answer);
                if (questions[quesNum].answer == this.textContent) {
                feedbackMsg.textContent = "You got it right!"; 
                feedbackMsg.style.backgroundColor = "#6CCED9";
                    

                 numCorrect++;
                } else if(this) {
                    
                    feedbackMsg.textContent = "wrong answer"
                    feedbackMsg.style.backgroundColor = "#F26D3D";
                } else {

                }
                quesNum += 1;
                options.textContent = "";
                question.textContent = "";
                questionRender()

        })
       
    }
   
}

function evaluateAnswer() {
//     console.log(this.textContent);
//     quesNum += 1;
//     options.textContent = "";
//     question.textContent = "";
//     var numCorrect = 0;
// // if else statement to check whether answer is correct
//         if (this.options = 21) {
         
//          numCorrect++;
//         } else if(this) {
            
//             textContent = "wrong answer"
//         }
//         questionRender()
    // then do things based on that
    //check to see if quesnum is greater than the number of questions

    // if the game is not over run questionRender()
    
    // if it is run some end game function to be determined
}

//set up a function for the start button
StartBtn.addEventListener("click", function(event){
    console.log(event);
    countdown();
    questionRender()
    // StartBtn.onclick(style.display = "none")
 
    // run a function that renders the questions
}) 
    



//for loop for the options of a question








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
