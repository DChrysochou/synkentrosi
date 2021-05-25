import React from 'react';

import {greetings} from '../utils/greetingsList';
import '../../style/css/greeting.css';

function Greeting(props) {
  var name = props.name || "Human";
  var greeting = greetings.list[Math.floor(Math.random() * greetings.list.length)];
  return (
    <div id="greeting-container">
      {greeting}, {name}.
    </div>
  );
}

export default Greeting;