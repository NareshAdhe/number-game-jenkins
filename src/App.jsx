import React, { useState } from "react";
import "./App.css";

function App() {
  const [target, setTarget] = useState(generateNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setMessage("Please enter a valid number.");
    } else if (numGuess === target) {
      setMessage(`🎉 Correct! The number was ${target}.`);
    } else if (numGuess < target) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  const resetGame = () => {
    setTarget(generateNumber());
    setGuess("");
    setMessage("New game started!");
  };

  return (
    <div className="App">
      <h1>🎯 Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={resetGame}>Restart</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
