import React, { useState, useEffect } from 'react';
import FootballerInfo from './FootballerInfo';
import Question from './Question';
import data from '../data/footballerData';

const Quiz = () => {
  const [currentFootballer, setCurrentFootballer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(5);
  const [gameEnded, setGameEnded] = useState(false);
  const [finalScore, setFinalScore] = useState();
  const [remainingTime, setRemainingTime] = useState(10); // 10 seconds for each question.
  const [onTimerEnd, setTimerEnd] = useState(false); // when timer ends, set to true.

  const question = "what is the name of the footballer?"

  useEffect(() => {setCurrentFootballer(data[0])}, []);
  // the single array brackets means that it will only run once when component is mounted.
  // by passing empty array it is telling react there are no dependancies it relies on.

  const handleUserGuess = (userGuess) => {
    if (onTimerEnd) { // check if the timer has ended
      setGameEnded(true);
      setFinalScore(score); // show final score
    } else if (questionNumber < maxQuestions) {
      if (userGuess === currentFootballer.name) {
        setScore((prevScore) => prevScore + 1);
        setCurrentFootballer(data[questionNumber]);
        setQuestionNumber(questionNumber + 1);
      }
      if (userGuess !== currentFootballer.name) {
        alert("Wrong Answer!");
      }
    } else {
      setGameEnded(true);
      setFinalScore(score + 1); // increment score one more time to include last question
    }
  };

  return (
    <div>
      {gameEnded ? (
        <p>Your final score is {finalScore}</p>
      ) : currentFootballer ? (
        <div>
          <Question questionNumber={questionNumber} question={question} 
          handleUserGuess={handleUserGuess} footballer={currentFootballer} footballerNames={data} />
          <p>Score: {score}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
