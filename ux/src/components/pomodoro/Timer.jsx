import React from 'react';

const formatTime = (remainingTime) => {
  let minutes = Math.floor(remainingTime / 60);
  if (minutes < 10) 
    minutes = '0' + minutes;

  let seconds = remainingTime - 60 * minutes;
  if (seconds < 10) 
    seconds = '0' + seconds;

  return minutes + ":" + seconds;
}

function Timer(props) {
  return (
    <div id="timer">
      <div className="timer-container">
        <div>{props.activeTimer}</div>
        <div id="timer-countdown">{formatTime(props.remainingTime)}</div>
      </div>
    </div>
  );
}

export default Timer;