import React from 'react'
import WorldClocks from '../clock/WorldClocks';
import Pomodoro from '../pomodoro/Pomodoro';
import ToDoList from '../todo/ToDoList';

import '../../style/css/MainView.css';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <div id="top-panel">
          <WorldClocks/>
        </div>
        <div id="center-box">
          <Pomodoro/>
        </div>
        <div id="bottom-panel">
          <ToDoList/>
        </div>
      </div>
    );
  }
}

export default MainView;
