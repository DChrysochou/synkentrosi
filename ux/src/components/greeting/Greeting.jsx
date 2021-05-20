import React from 'react';

import '../../style/css/greeting.css';

function Greeting(props) {
  var name = props.name || "Human";
  return (
    <div id="greeting-container">
      Get after it, {name}.
    </div>
  );
}

export default Greeting;