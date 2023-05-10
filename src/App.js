import React, { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <button onClick={handleStartGame}>Start Game</button>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;