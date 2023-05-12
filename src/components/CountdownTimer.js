import { useEffect, useState } from "react";

const CountdownTimer = ({ remainingTime, onTimerEnd }) => {
  const [time, setTime] = useState(remainingTime);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      onTimerEnd();
    }
  }, [time, onTimerEnd]);

  useEffect(() => {
    setTime(remainingTime);
  }, [remainingTime]);

  return (
    <div>
      <p>Remaining Time: {time}</p>
    </div>
  );
};

export default CountdownTimer;
