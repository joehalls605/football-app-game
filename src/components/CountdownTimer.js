import { useEffect } from "react";
import React from 'react';
import { useState } from 'react';


const CountdownTimer = ({remainingTime, onTimerEnd}) => {
    const [timeLeft, setTimeLeft] = useState(remainingTime);

    useEffect(() =>{
        if (remainingTime === 0){
            onTimerEnd();
        }

        const timer = setTimeout(()=> {
            setTimeLeft(remainingTime - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [remainingTime, onTimerEnd]);

    return (
        <div>
            <p>Remaining Time: {remainingTime}</p>
        </div>



        

    );



    
};
export default CountdownTimer;