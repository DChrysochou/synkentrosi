import React from 'react';

function StartStopButton(props) {
  return (
    <div className="controller">
      <button id="timer-button" onClick={props.startStop}>{props.isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default StartStopButton;