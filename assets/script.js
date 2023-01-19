// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: [
      {text: 'strings', answer: false}, 
      {text: 'booleans', answer: false},
      {text: 'alerts', answer: true}, 
      {text: 'numbers', answer: false}
    ],
    answer: 'alerts',
  },

  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: [
      {text: 'quotes', answer: false}, 
      {text: 'curly brackets', answer: false}, 
      {text: 'parentheses', answer: true}, 
      {text: 'square brackets', answer: false}
    ],
    answer: 'parentheses',
  },

  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      {text:'numbers and strings', correct: false},
      {text:'other arrays', correct: false},
      {text:'booleans', correct: false},
      {text:'all of the above',correct: true},
    ],
    answer: 'all of the above',
  },

  {
    title:'String values must be enclosed within ____ when being assigned to variables.',
    choices: [
      {text:'commas', correct: false},
      {text:'curly brackets', correct: false}, 
      {text:'quotes', correct: true},
      {text:'parentheses', correct: false},
    ],
    answer: 'quotes',
  },

  {
    title:'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: [
      {text:'JavaScript', correct: false},
      {text:'terminal / bash', correct: false},
      {text:'for loops', correct: false},
      {text:'console.log', correct: true},
    ],
    answer: 'console.log',
  },
];

console.log(questions[0].title);

// variables for options
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");

// variables for starting quiz application:
var startButton = document.getElementById('startButton');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-buttons')

// // //variables for timing
var timeHeader = document.querySelector("#timer");
var timeLeft = 80;


// function for timer
function startTimer() {
    var timeInterval = setInterval(function() {
      timeLeft--;
      timeHeader.textContent = timeLeft + ' seconds left';
      if(timeLeft === 0) {
        clearInterval(timeInterval);
        sendMessage();
        console.log(timeLeft)
      }
    }, 1000);
  }

function sendMessage() {
    timeHeader.textContent = "Game Over";
   }

// start button to begin quiz   
startButton.addEventListener('click', startQuiz);

// startQuiz function that includes starTimer. Also working on another function to display the questions.
function startQuiz() {
    console.log("started");
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    answerButtonElement.classList.remove('hide')
    startTimer()
    setNextQuestion()
    firstAnswerButtons()
}
    
function setNextQuestion(question) {
  for (var i = 0; i < questions.length; i++) {
    questionElement.innerText = questions[i].title
  }
}

function firstAnswerButtons () {

}