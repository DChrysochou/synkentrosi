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
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div id="settings-container">
        <div id="settings-flyout" className={`${this.state.isOpen ? "open" : "closed"}`}>
          <Flyout/>
        </div>
        <button id="settings-button" className="icon-button" onClick={this.handleClick}><FiSettings/></button>
      </div>
    );
  }
}

export default Settings;