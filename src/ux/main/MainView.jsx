import React from 'react'
import WorldClocks from '../clock/WorldClocks';

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
          
        </div>
      </div>
    );
  }
}

export default MainView;
