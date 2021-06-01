import React from 'react'
import WorldClocks from '../clock/WorldClocks';
import Pomodoro from '../pomodoro/Pomodoro';
import ToDoList from '../todo/ToDoList';
import Greeting from '../greeting/Greeting';
import Settings from '../settings/Settings';
import Quotes from '../quotes/Quotes';
import delegate from './bgDelegate';

import {greetings} from '../utils/greetingUtil';

import '../../style/css/mainView.css';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: localStorage.getItem("name") || ''
    };
    
    this.todoList = React.createRef();
    this.changeName.bind(this);
  }

  componentDidMount = async () => {
    let bgPath = await this.getDailyBackgroundPath();
    this.setState({
      bgPath: bgPath,
      showApp: true
    });

    setTimeout(() => {
      this.setState({
        removeScreen: true
      });
    }, 750);

    this.setState({
      greeting: greetings.getRandom()
    })
  }

  getDailyBackgroundPath = async () => {
    let res = await delegate.getBackground();
    let bg = res.data,
        path = 'http://localhost:8080/backgrounds/' + bg;
    return path;
  }

  changeName = (name) => {
    localStorage.setItem('name', name);
    this.setState({
      userName: name
    })
  }
  
  createTodoList = (name) => {
    this.todoList.current.createNewList(name);
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
        <div className={`fade-in-screen 
          ${this.state.showApp ? "fade-out" : ""}
          ${this.state.removeScreen ? "begone" : ""}
        `}></div>
        <div id="top-panel">
          <ToDoList ref={this.todoList}/>
          <WorldClocks/>
        </div>
        <div id="center-panel">
          <Pomodoro/>
          <Greeting 
            name={this.state.userName}
            greeting={this.state.greeting}
          />
        </div>
        <div id="bottom-panel">
          <Quotes/>
          <Settings 
            changeName={this.changeName}
            createTodoList={this.createTodoList}
            name={this.state.userName}
          />
        </div>
      </div>
    );
  }
}

export default MainView;
