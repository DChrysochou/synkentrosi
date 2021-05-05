import React from 'react';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prop: []
    };
  }

  render() {
    const prop = this.props.prop;
    return (
      <div>{prop}</div>
    );
  }
}

export default Pomodoro;