import React from 'react';

import '../../style/css/greeting.css';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Human"
    };
  }

  render() {
    return (
      <div id="greeting-container">
        Good morning, {this.state.name}.
      </div>
    );
  }
}

export default Greeting;