import React from 'react';
import { FiSettings } from 'react-icons/fi';

import Flyout from './Flyout';

import '../../style/css/Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick.bind(this);
    this.handleNameChange.bind(this);
    this.handleTodoListSubmit.bind(this);
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleNameChange = (name) => {
    this.props.changeName(name);
  }

  handleTodoListSubmit = (name) => {
    this.props.createTodoList(name);
  }

  render() {
    return (
      <div id="settings-container">
        <div id="settings-flyout" className={`${this.state.isOpen ? "open" : "closed"}`}>
          <Flyout 
            handleNameChange={this.handleNameChange}
            handleTodoListSubmit={this.handleTodoListSubmit}
            name={this.props.name}
          />
        </div>
        <button id="settings-button" className="icon-button-small" onClick={this.handleClick}><FiSettings/></button>
      </div>
    );
  }
}

export default Settings;