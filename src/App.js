// src/App.js

import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import './index.css'; // Import Tailwind CSS

/**
 * Main App component for rendering the Pomodoro Timer.
 */
const App = () => {
    return (
        <div>
            <PomodoroTimer />
        </div>
    );
};

export default App;