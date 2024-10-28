// src/PomodoroTimer.js

import React, { useState, useEffect } from 'react';

/**
 * PomodoroTimer component that implements a Pomodoro timer functionality.
 * Allows users to work in focused sprints with breaks in between.
 */
const PomodoroTimer = () => {
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    // Start or stop the timer
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // Reset the timer
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(1500);
    };

    // Effect to handle timer countdown
    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        // Switch to break after finishing work session
                        setIsBreak(!isBreak);
                        return isBreak ? 1500 : 300; // 5-minute break
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer); // Cleanup on unmount
    }, [isActive, isBreak]);

    // Format time left in mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
            <h1 className="text-5xl font-bold text-white mb-5">LineTen</h1>
            <div className="text-8xl font-bold text-white mb-5">
                {formatTime(timeLeft)}
            </div>
            <button
                onClick={toggleTimer}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button
                onClick={resetTimer}
                className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
                Reset
            </button>
        </div>
    );
};

export default PomodoroTimer;