
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(1500); // Initial 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(!isBreak);
      setTime(isBreak ? 1500 : 300); // 25 min focus, 5 min break
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTime(isBreak ? 300 : 1500);
  };

  return (
    <div className={`app-container ${isBreak ? 'break' : 'focus'}`}>
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        {`${Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
      </div>
      <button className="control-btn" onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="control-btn reset" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default App;