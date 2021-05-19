import React from 'react';

function StartStopButton(props) {
  return (
    <div className="controller">
      <button id="timer-button" onClick={props.startStop}>{props.isRunning ? 'stop' : 'start'}</button>
    </div>
  );
}

export default StartStopButton;