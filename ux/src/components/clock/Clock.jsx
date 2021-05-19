//import '../../style/css/Clock.css';
import React from 'react';
import moment from 'moment-timezone';

class Clock extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      // timezone won't change and the time state is internally managed
      time: moment.tz(this.props.timezone).format('LT') 
    }
  }

  componentDidMount = () => {
    this.timerInterval = setInterval(() => {
        this.setState({
          time: moment.tz(this.props.timezone).format('LT'),
        });
      }, 1000);
  }

  componentWillUnmount = () => {
    this.timerInterval && clearInterval(this.timerInterval);
  }

  render() {
    return(
      <div className="clock">
        <div className="clock-time">{this.state.time}</div>
        <div className="clock-region">{this.props.region}</div>
      </div>
    )
  }
}

export default Clock;