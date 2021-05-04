import React from 'react'
import Clock from '../clock/Clock';

import '../../style/css/MainView.css';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount = async () => {
    let data = await this.fetchData();
    this.setState(prevState => ({
      items: [...prevState.items, ...data]
    }));
  }

  fetchData = async () => {
    let response = await fetch("list.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    let json = await response.json();
    return json;
  }

  handleSubmit = (title) => {
    if (!title || !title.trim()) return null;

    this.setState(prevState => ({
      items: [...prevState.items, {
        title: title,
        key: Date.now()
      }]
    }));
  }
  
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default MainView;
