// Initial quiz score declaration
var score = 0;

var yourScore = document.createElement("h1");

// Create elements for multiple choices for Quiz 1
var ulista = document.createElement("ul");
var option1a = document.createElement("li");
var option2a = document.createElement("li");
var option3a = document.createElement("li");
var option4a = document.createElement("li");

// Create elements for multiple choices for Quiz 2
var ulistb = document.createElement("ul");
var option1b = document.createElement("li");
var option2b = document.createElement("li");
var option3b = document.createElement("li");
var option4b = document.createElement("li");

// Create elements for multiple choices for Quiz 3
var ulistc = document.createElement("ul");
var option1c = document.createElement("li");
var option2c = document.createElement("li");
var option3c = document.createElement("li");
var option4c = document.createElement("li");

// Create elements for multiple choices for Quiz 4
var ulistd = document.createElement("ul");
var option1d = document.createElement("li");
var option2d = document.createElement("li");
var option3d = document.createElement("li");
var option4d = document.createElement("li");

// Create elements for multiple choices for Quiz 5
var uliste = document.createElement("ul");
var option1e = document.createElement("li");
var option2e = document.createElement("li");
var option3e = document.createElement("li");
var option4e = document.createElement("li");


// Create notification elements for right or wrong answer 
var notifyGreen = document.createElement("p")
var notifyRed = document.createElement("p")
var notifyEl = document.getElementById("notify");

// Select the HTML Timer element
var timerEl = document.getElementById("time")
var startButton = document.getElementById("start")
var highScores = document.getElementById("highscores")

// Create question elements
var questionTitleA = document.getElementById("question-titleA");
var questionTitleB = document.getElementById("question-titleB");
var questionTitleC = document.getElementById("question-titleC");
var questionTitleD = document.getElementById("question-titleD");
var questionTitleE = document.getElementById("question-titleE");

// Select HTML elements for rendering multiple choice answers by ID 
var choicesA = document.getElementById("choicesA");
var choicesB = document.getElementById("choicesB");
var choicesC = document.getElementById("choicesC");
var choicesD = document.getElementById("choicesD");
var choicesE = document.getElementById("choicesE");


// Select HTML elements for rendering Quizzes (by ID) 
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");
var questionFour = document.getElementById("questionFour");
var questionFive = document.getElementById("questionFive");

// Write Text-Content for multiple choice answers (Quiz 1)
option1a.textContent = "Javascript";
option2a.textContent = "HTML";
option3a.textContent = "CSS";
option4a.textContent = "jQuery";
option2a.setAttribute("class", "answer");

// Write Text-Content for multiple choice answers (Quiz 2)
option1b.textContent = "Contact Style Signals";
option2b.textContent = "Computer Skills System";
option3b.textContent = "Carriers Style Signs";
option4b.textContent = "Cascading Style Sheet";
option4b.setAttribute("class", "answer");

// Write Text-Content for multiple choice answers (Quiz 3)
option1c.textContent = "Building interaction into applications";
option2c.textContent = "Drawing objects on the screen";
option3c.textContent = "Buying and selling crypto";
option4c.textContent = "Debugging";
option1c.setAttribute("class", "answer");

// Write Text-Content for multiple choice answers (Quiz 4)
option1d.textContent = "Deploying applications to the web";
option2d.textContent = "Just styling the content";
option3d.textContent = "Copying and pasting large content";
option4d.textContent = "Accessing and manipulating elements of the document object";
option4d.setAttribute("class", "answer");

// Write Text-Content for multiple choice answers (Quiz 5)
option1e.textContent = "Make new server equipment";
option2e.textContent = "Create elements dynamically using Javascript and the DOM";
option3e.textContent = "Create computers from scratch";
option4e.textContent = "Manipulate the web";
option2e.setAttribute("class", "answer");

// Write and style Text-Content for notification messages
notifyGreen.style.color = "green"
notifyRed.style.color = "red"
notifyGreen.textContent = "Correct Answer!"
notifyRed.textContent = "Wrong Answer!"

yourScore.setAttribute("style","font-weight: 800; font-size: 60px; text-align: center");

// Append Quiz 1 answers
ulista.appendChild(option1a);
ulista.appendChild(option2a);
ulista.appendChild(option3a);
ulista.appendChild(option4a);

// Append Quiz 2 answers
ulistb.appendChild(option1b);
ulistb.appendChild(option2b);
ulistb.appendChild(option3b);
ulistb.appendChild(option4b);

// Append Quiz 3 answers
ulistc.appendChild(option1c);
ulistc.appendChild(option2c);
ulistc.appendChild(option3c);
ulistc.appendChild(option4c);

// Append Quiz 4 answers
ulistd.appendChild(option1d);
ulistd.appendChild(option2d);
ulistd.appendChild(option3d);
ulistd.appendChild(option4d);

// Append Quiz 5 answers
uliste.appendChild(option1e);
uliste.appendChild(option2e);
uliste.appendChild(option3e);
uliste.appendChild(option4e);

// Function for Quiz 1
function showQuiz() {
    questionOne.removeAttribute("class");
    questionTitleA.textContent = "Which of these languages can be used to write up the structure of a webpage?";
    choicesA.appendChild(ulista);
    handleTimer();
    } 

// Function for Quiz 2
function showQuizTwo() {
    questionTwo.removeAttribute("class");
    questionTitleB.textContent = "What does CSS stand for in programming?";
    choicesB.appendChild(ulistb);
    }  

// Function for Quiz 3
function showQuizThree() {
    questionThree.removeAttribute("class");
    questionTitleC.textContent = "What is Javascript essentially used for?";
    choicesC.appendChild(ulistc);
    }

// Function for Quiz 4
function showQuizFour() {
    questionFour.removeAttribute("class");
    questionTitleD.textContent = "One important use of the DOM is:?";
    choicesD.appendChild(ulistd);
    } 

// Function for Quiz 5
function showQuizFive() {
    questionFive.removeAttribute("class");
    questionTitleE.textContent = "What is the 'createElement' method used for?"
    choicesE.appendChild(uliste);
    } 
 
// Timer Function
timeLeft = 40;
function handleTimer() {
    var timer = setInterval(function(){
        timerEl.textContent = timeLeft;
        if(timeLeft > 0) {
        timeLeft--;}
        else {
    questionTitleA.textContent = "";
    questionTitleB.textContent = "";
    questionTitleC.textContent = "";
    questionTitleD.textContent = "";
    questionTitleE.textContent = "";
    choicesA.textContent = "";
    choicesB.textContent = "";
    choicesC.textContent = "";
    choicesD.textContent = "";
    choicesE.textContent = "";
    notifyEl.textContent = "";
    clearInterval(timer);
    startButton.setAttribute("class", "hide");
    displayScore()

        }           
        }
        , 1000);
}


// Add Event Listener for Quiz 1
ulista.addEventListener("click", function(event) {
var element = event.target;
if(element.matches(".answer")) {
    notifyEl.textContent = "";
    notifyEl.appendChild(notifyGreen);
    score = 20 + score;
    // console.log(score);
    questionOne.setAttribute("class", "hide");
    showQuizTwo();
    
}
else {
    notifyEl.textContent = "";
    notifyEl.appendChild(notifyRed);
    timeLeft = timeLeft-10;
    questionOne.setAttribute("class", "hide");
    showQuizTwo();
}
})

// Add Event Listener for Quiz 2
ulistb.addEventListener("click", function(event) {
var element = event.target;
    if(element.matches(".answer")) {
        notifyEl.textContent = "";
        notifyEl.appendChild(notifyGreen);
        score = 20 + score;
        // console.log(score);
        questionTwo.setAttribute("class", "hide");
        showQuizThree();      
}
else {
        notifyEl.textContent = "";
        notifyEl.appendChild(notifyRed);
        timeLeft = timeLeft-10;
        questionTwo.setAttribute("class", "hide");
        showQuizThree();  
    }
    })

// Add Event Listener for Quiz 3
ulistc.addEventListener("click", function(event) {
var element = event.target;
    if(element.matches(".answer")) {
        notifyEl.textContent = "";
        notifyEl.appendChild(notifyGreen);
        score = 20 + score;
        // console.log(score);
        questionThree.setAttribute("class", "hide");
        showQuizFour();      
}
else {
        notifyEl.textContent = "";
        notifyEl.appendChild(notifyRed);
        timeLeft = timeLeft-10;
        questionThree.setAttribute("class", "hide");
        showQuizFour();  
    }
    })

// Add Event Listener for Quiz 4
ulistd.addEventListener("click", function(event) {
    var element = event.target;
        if(element.matches(".answer")) {
            notifyEl.textContent = "";
            notifyEl.appendChild(notifyGreen);
            score = 20 + score;
            // console.log(score);
            questionFour.setAttribute("class", "hide");
            showQuizFive();      
    }
    else {
            
            notifyEl.textContent = "";    
            notifyEl.appendChild(notifyRed);
            timeLeft = timeLeft-10;
            questionFour.setAttribute("class", "hide");
            showQuizFive();  
        }
        })

// Add Event Listener for Quiz 5
uliste.addEventListener("click", function(event) {
    var element = event.target;
        if(element.matches(".answer")) {
            notifyEl.textContent = "";
            score = 20 + score;
            questionFive.setAttribute("class", "hide");
            startButton.setAttribute("class", "hide");
            timerEl.setAttribute("class", "hide");
            displayScore();
            // console.log(score);

    }
    else {
            
            notifyEl.textContent = "";
            timeLeft = timeLeft-10;
            questionFive.setAttribute("class", "hide");
        }
        })

function displayScore() {
    yourScore.textContent = `Your score is ${score}%`
    document.body.appendChild(yourScore);
    setScore();
}

function getScore() {
    var rtvScore = localStorage.getItem("Score");
    var parsedScore = JSON.parse(rtvScore);
    highScores.textContent = parsedScore;
}
getScore()

function setScore() {
    localStorage.setItem("Score", score)
}

function saveInitAndScore() {

}

