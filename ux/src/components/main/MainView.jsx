import React from 'react'
import WorldClocks from '../clock/WorldClocks';
import Pomodoro from '../pomodoro/Pomodoro';
import ToDoList from '../todo/ToDoList';
import delegate from './bgDelegate';

import '../../style/css/mainView.css';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    let bgPath = await this.getDailyBackgroundPath();
    this.setState({bgPath: bgPath});
  }

  getDailyBackgroundPath = async () => {
    let res = await delegate.getBackground();
    let bg = res.data,
        path = 'http://localhost:8080/backgrounds/' + bg;
    return path;
  }
  
  render() {
    return (
      <div className="main-container" 
        style={{
          backgroundImage: "url(" + this.state.bgPath + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'        
        }}
      >
        <ToDoList/>
        <Pomodoro/>
        <WorldClocks/>
      </div>
    );
  }
}

export default MainView;
