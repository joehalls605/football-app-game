import React, { useState, useEffect } from 'react';
import FootballerInfo from './FootballerInfo';
import UserInput from './UserInput';
import CountdownTimer from './CountdownTimer';
import data from '../data/footballers.json';

function Quiz() {
  const [currentFootballer, setCurrentFootballer] = useState(null);
  const [remainingTime, setRemainingTime] = useState(10);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    setCurrentFootballer(data[0]);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setQuestionNumber(questionNumber + 1);
      setRemainingTime(10);
      setCurrentFootballer(data[questionNumber]);
    }
    const timer = setTimeout(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [remainingTime]);

  const handleUserGuess = (userGuess) => {
    if (userGuess.toLowerCase() === currentFootballer.name.toLowerCase()) {
      setScore(score + 1);
    }
  };

  const handleNextButtonClick = () => {
    setQuestionNumber(questionNumber + 1);
    setCurrentFootballer(data[questionNumber]);
  };

  const handleTimerEnd = () => {
    setQuestionNumber(questionNumber + 1);
    setRemainingTime(10);
    setCurrentFootballer(data[questionNumber]);
  };

  return (
    <div>
      {currentFootballer ? (
        <div>
          <FootballerInfo footballer={currentFootballer} />
          <UserInput onUserGuess={handleUserGuess} onNextButtonClick={handleNextButtonClick} />
          <CountdownTimer remainingTime={remainingTime} onTimerEnd={handleTimerEnd} />
          <p>Score: {score}</p>
          <p>Question {questionNumber}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quiz;
