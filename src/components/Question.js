import React, { useEffect } from "react";
import { useState } from "react";

const Question = ({ handleUserGuess, questionNumber, question, onAnswer, footballer, footballerNames}) => {
  
  //STATE
    // buttonOptions
  const [options, setOptions] = useState(() => {
    const randomNames = footballerNames.sort(() => 0.5 - Math.random());
    // Random button options
    const buttonOptions = [randomNames[0].name, randomNames[1].name, randomNames[2].name, footballer.name];
    return buttonOptions.sort(() => 0.5 - Math.random());
  });

  const [UserGuess, setUserGuess] = useState()

  useEffect(()=> {
    const randomNames = footballerNames.sort(() => 0.5 - Math.random());
    const buttonOptions = [randomNames[0].name, randomNames[1].name, randomNames[2].name, footballer.name];
    setOptions(buttonOptions.sort(() => 0.5 - Math.random()));
  }, [question, footballer, footballerNames]);




  const handleAnswer = (option) => {
      handleUserGuess(option)
  };


  return (
    <div>
      <h2>What is the name of the footballer?</h2>
      <p>Question {questionNumber}</p>
      <p>Nationality: {footballer.nationality}</p>
      <p>Position: {footballer.position}</p>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Question;