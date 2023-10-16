// Create elements for multiple choices for Quiz 1
var ulista = document.createElement("ul");
var option1a = document.createElement("li");
var option2a = document.createElement("li");
var option3a = document.createElement("li");
var option4a = document.createElement("li");

var score = 0;

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

// Create notification elements for right or wrong answer 
var notifyGreen = document.createElement("p")
var notifyRed = document.createElement("p")
var notifyEl = document.getElementById("notify");

// Select the HTML Timer element
var timerEl = document.getElementById("time")

// Create question elements
var questionTitleA = document.getElementById("question-titleA");
var questionTitleB = document.getElementById("question-titleB");
var questionTitleC = document.getElementById("question-titleC");

// Select HTML elements for rendering multiple choice answers by ID 
var choicesA = document.getElementById("choicesA");
var choicesB = document.getElementById("choicesB");
var choicesC = document.getElementById("choicesC");

// Select HTML elements for rendering Quizzes (by ID) 
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");

// Write Text-Content for multiple choice answers (Quiz 1)
option1a.textContent = "Javascript";
option2a.textContent = "HTML";
option3a.textContent = "CSS";
option4a.textContent = "jQuery";
option2a.setAttribute("class", "answer")

// Write Text-Content for multiple choice answers (Quiz 2)
option1b.textContent = "Contact Style Signals";
option2b.textContent = "Computer Skills System";
option3b.textContent = "Carriers Style Signs";
option4b.textContent = "Cascading Style Sheet";
option4b.setAttribute("class", "answer")

// Write Text-Content for multiple choice answers (Quiz 3)
option1c.textContent = "Building interaction into applications";
option2c.textContent = "Drawing objects on the screen";
option3c.textContent = "Buying and selling crypto";
option4c.textContent = "Debugging";
option1c.setAttribute("class", "answer")

// Write and style Text-Content for notification messages
notifyGreen.style.color = "green"
notifyRed.style.color = "red"
notifyGreen.textContent = "Correct Answer!"
notifyRed.textContent = "Wrong Answer!"

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

// Add Event Listener for Quiz 1
ulista.addEventListener("click", function(event) {
var element = event.target;
if(element.matches(".answer")) {
    notifyEl.appendChild(notifyGreen);
    score = 20 + score;
    console.log(score);
    questionOne.setAttribute("class", "hide");
    showQuizTwo();
    
}
else {
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
        notifyEl.appendChild(notifyGreen);
        score = 20 + score;
        console.log(score);
        questionTwo.setAttribute("class", "hide");
        showQuizThree();      
}
else {
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
        notifyEl.appendChild(notifyGreen);
        score = 20 + score;
        console.log(score);
        questionThree.setAttribute("class", "hide");
        // showQuizTwo();      
}
else {
        notifyEl.appendChild(notifyRed);
        timeLeft = timeLeft-10;
        questionThree.setAttribute("class", "hide");
        // showQuizTwo();  
    }
    })

// Function for Quiz 3
function showQuizThree() {
    questionThree.removeAttribute("class");
    questionTitleC.textContent = "What is Javascript essentially used for?";
    choicesC.appendChild(ulistc);
    } 


// Function for Quiz 2
function showQuizTwo() {
    questionTwo.removeAttribute("class");
    questionTitleB.textContent = "What does CSS stand for in programming?";
    choicesB.appendChild(ulistb);
    }  

// Function for Quiz 1
function showQuiz() {
    questionOne.removeAttribute("class");
    questionTitleA.textContent = "Which of these languages can be used to write up the structure of a webpage?";
    choicesA.appendChild(ulista);
    handleTimer();
    }  

// Timer Function
timeLeft = 40;
function handleTimer() {
    var timer = setInterval(function(){
        if(timeLeft >= 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;            
        }
        }, 1000);

        if(timeLeft === 0){
            clearInterval(timer)
        }
    }
