import React from 'react';

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  onInput = (e) => this.setState({
    input: e.target.value
  });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() {
    return (
      <div className="flyout-container">
        <form id="name-form" className="settings-item" onSubmit={this.onSubmit.bind(this)}>
          <input 
            id="name-input"
            placeholder={`${this.props.name ? this.props.name : "Enter your preferred name"}`}
            value={this.state.input}
            onChange={this.onInput} 
            type="text"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Flyout;