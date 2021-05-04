//import '../../style/css/Clock.css';
import React from 'react';
import moment from 'moment-timezone';

class Clock extends React.Component{
  constructor() {
    super()
    this.state = {
      time: '',
      timezone: "Canada/Newfoundland"
    }
    this.clicked = this.clicked.bind(this)
  }

  componentDidMount = () => {
    setInterval(() => {
        this.setState({
          time: moment.tz(this.state.timezone).format('LTS'),
        });
      }, 1000);
  }

  clicked() {
    console.log('xyzzy');
  }

  render() {
    return(
      <div id="clock" onClick={this.clicked}>
        <h1 className="clock">{this.state.time}</h1>
      </div>
    )
  }
}

export default Clock;