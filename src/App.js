import React from 'react';
import './App.css';

function buttonsForState(state){
    return (
        <button>Test</button>
    );
}

function Dialog(state) {
  return (
    <div className="container">
        <header>
            "text for state logo"
        </header>
        {buttonsForState(state)}
    </div>
  );
}

export default Dialog;
