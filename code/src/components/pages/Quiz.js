import React, { useState } from "react";
import './styles/Quiz.css';

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0); // New state variable for currentQuestion
  const [showScore, setShowScore] = useState(false); // New state variable for showScore
  const [score, setScore] = useState(0); // New state variable for score
  const [quizStarted, setQuizStarted] = useState(false); // State variable to track quiz start

  const questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: [
        { text: 'strings', answer: false },
        { text: 'booleans', answer: false },
        { text: 'alerts', answer: true },
        { text: 'numbers', answer: false }
      ],
      answer: 'alerts',
    },

    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: [
        { text: 'quotes', answer: false },
        { text: 'curly brackets', answer: false },
        { text: 'parentheses', answer: true },
        { text: 'square brackets', answer: false }
      ],
      answer: 'parentheses',
    },

    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        { text: 'numbers and strings', correct: false },
        { text: 'other arrays', correct: false },
        { text: 'booleans', correct: false },
        { text: 'all of the above', correct: true },
      ],
      answer: 'all of the above',
    },

    {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: [
        { text: 'commas', correct: false },
        { text: 'curly brackets', correct: false },
        { text: 'quotes', correct: true },
        { text: 'parentheses', correct: false },
      ],
      answer: 'quotes',
    },

    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: [
        { text: 'JavaScript', correct: false },
        { text: 'terminal / bash', correct: false },
        { text: 'for loops', correct: false },
        { text: 'console.log', correct: true },
      ],
      answer: 'console.log',
    },
  ];

  const handleAnswerButtonClick = (answer) => {
    // The first line of the function creates a variable to store the index of the next question.
    // It is calculated by adding 1 to the currentQuestion state variable.
    const nextQuestion = currentQuestion + 1;
    // The first if statement checks if the selected answer matches the correct answer for the current question. 
    // It compares the answer parameter with the answer property of the current question object.
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    // The second if statement checks if there are more questions to show.
    // If there are more questions, it updates the currentQuestion state variable to the next question.
    // This causes the component to re-render and show the next question.
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    // The else statement sets the showScore state variable to true using the setShowScore setter function. 
    // It indicates that the score should be shown instead of the next question.
    // This causes the component to re-render and show the score instead of the question.
    } else {
      setShowScore(true);

    }
  };

  // The handleStartQuiz function sets the quizStarted state variable to true when the Start Quiz button is clicked.
  // This causes the component to re-render and show the first question.
  const handleStartQuiz = () => {
    setQuizStarted(true); 
  };

  // The handleSubmit function prevents the form from being submitted when the user clicks the Next button.
  // This prevents the page from refreshing and losing the current question.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section">
      <div className="container">
        {quizStarted ? (
          <>
            <div className="question-container">
              <div className="questionEl">
                <p className="pStyle">{questions[currentQuestion].title}</p>
              </div>
            </div>
  
            <form id="answer-buttons" className="formGrid" onSubmit={handleSubmit}>
              {questions[currentQuestion].choices.map((choice, index) => (
                <button
                  className="btn"
                  key={index}
                  onClick={() => handleAnswerButtonClick(choice.text)}
                >
                  {choice.text}
                </button>
              ))}
            </form>
          </>
        ) : (
          <div className="startBtn">
            <button className="startBtn" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        )}

        {showScore ? (
          <div>
            <p>You have completed the quiz!</p>
            <p>Score: {score}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}