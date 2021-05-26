import React from 'react';

import '../../style/css/greeting.css';

function Greeting(props) {
  var name = props.name || "Human";
  var greeting = props.greeting;
  return (
    <div id="greeting-container">
      {greeting}, {name}.
    </div>
  );
}

export default Greeting;