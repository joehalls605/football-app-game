import React from 'react';
import { useState } from 'react';


const UserInput = ({onUserGuess, onNexButtonClick}) => {

    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleEnterKeyPress = (event) => {
    if(event.key === 'Enter'){
        onUserGuess(userInput);
        setUserInput('');
    }
    };

    const handleNextButtonClick = () => {
        onNexButtonClick();
        setUserInput('');
    };

    return (
        <div>
            <input type="text" value={userInput} onChange={handleInputChange} onKeyPress={handleEnterKeyPress} />
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
    );

}

  
export default UserInput;