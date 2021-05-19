import React from 'react';
import StartStopButton from './StartStopButton';
import Timer from './Timer';

import '../../style/css/pomodoro.css';

/**
 * Pomodoro Timer
 * 
 * Requirements:
 * A "pomodoro" session length (25m) (DONE)
 * A "break" length (5m) (DONE)
 * Ability to switch between pomodoro and break (DONE)
 *    When a pomodoro completes, it should switch to break (DONE)
 *    When a break completes, it should switch to pomodoro (DONE)
 * A "start" button for starting the pomodoro or the break
 * A "stop" button for resetting the current pomodoro/break
 *    These can probably be one button that switches state based on whether the timer is running or not (DONE)
 *  
 * Good to Haves:
 * A way to change the length of sessions (v2)
 * A noise or some sort of alert when one completes
 * A count of how many pomodoros completed per day (v2)
 * A button to quickly switch between the two types (v2)
 * A button to pause the timer without resetting (v2)
 **/

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      pomodoroTime: 25,
      remainingTime: 25 * 60,
      activeTimer: 'pomodoro',
      isRunning: false,
      timerInterval: null
    };

    this.startStop = this.startStop.bind(this);
  }

  // Button handler for starting and stopping the timer
  startStop = () => {
    if (!this.state.isRunning) {
      // If the current timer is stopped
      this.setState({
        isRunning: !this.state.isRunning,
        timerInterval: setInterval(() => {
          this.decrementTimer();
          this.updateTimerState();
        }, 1000)
      });
    } else {
      // If the timer is running and then stopped, reset the state
      this.state.timerInterval && clearInterval(this.state.timerInterval);
      this.setState({
        isRunning: !this.state.isRunning,
        timerInterval: null,
        activeTimer: 'pomodoro',
        remainingTime: this.state.pomodoroTime * 60
      });
    }
  }

  decrementTimer = () => {
    this.setState({
      remainingTime: this.state.remainingTime - 1
    });
  }

  updateTimerState = () => {
    if (this.state.remainingTime === 0) {
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      if (this.state.activeTimer === 'pomodoro') {
        this.setState({
          activeTimer: 'break',
          remainingTime: this.state.breakTime * 60,
          timerInterval: null,
          isRunning: false  
        });
      } else {
        this.setState({
          activeTimer: 'pomodoro',
          remainingTime: this.state.pomodoroTime * 60,
          timerInterval: null,
          isRunning: false  
        });
      }
    }
  }

  render() {
    return (
      <div id="pomodoro-container">
        <Timer 
          activeTimer={this.state.activeTimer}
          remainingTime={this.state.remainingTime}
        />

        <StartStopButton 
          startStop={this.startStop}
          isRunning={this.state.isRunning}
        />
      </div>
    )
  }
}

export default Pomodoro;