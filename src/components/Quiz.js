import React, { useState, useEffect } from 'react';
import FootballerInfo from './FootballerInfo';
import UserInput from './UserInput';
import CountdownTimer from './CountdownTimer';
import data from '../data/footballerData';

const Quiz = () => {
  const [currentFootballer, setCurrentFootballer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(3);
  const [gameEnded, setGameEnded] = useState(false);
  const [finalScore, setFinalScore] = useState();

  useEffect(() => {
    setCurrentFootballer(data[0]);
  }, []);

  const handleUserGuess = (userGuess) => {

    if(questionNumber < maxQuestions){
      if (userGuess === currentFootballer.name) {
        setScore(prevScore => prevScore + 1);
        setCurrentFootballer(data[questionNumber]);
        setQuestionNumber(questionNumber + 1);
  
      }
      if(userGuess !== currentFootballer.name){
        alert('Wrong Answer!');
      }

    }
    else{
      setGameEnded(true);
      setScore(prevScore => prevScore + 1); // increment score one more time to include last question
      setFinalScore(score + 1);
    }
  };

  return (
    <div>
      {gameEnded ? (
        <p>Your final score is {finalScore}</p>
      ) : currentFootballer ? (
        <div>
          <FootballerInfo footballer={currentFootballer} />
          <UserInput onUserGuess={handleUserGuess} />
          <CountdownTimer />
          <p>Score: {score}</p>
          <p>Question {questionNumber}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;