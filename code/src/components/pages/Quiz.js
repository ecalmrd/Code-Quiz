import React, { useState } from "react";
import './styles/quiz.css';

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

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
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
  };

  return (
    <div className="section">

      <div className="container">

        <div className="question-container">
          <div className="questionEl">
            <p className="pStyle"> {questions[currentQuestion].title} </p> </div>
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

        <div className="startBtn">
          {showScore ? (
            <p>You have completed the quiz!</p>
          ) : (
            <button className="startBtn">Start Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
}