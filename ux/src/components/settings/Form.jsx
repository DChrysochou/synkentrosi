import React from 'react';

class Form extends React.Component {
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
    this.setState({
      input: '' 
    });
  }

  render() {
    return (
      <div>
        <form id={`${this.props.formID}-form`} className="settings-item" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor={this.props.formID}>{this.props.formLabel}</label>
          <div className="input-container">
            <input 
              id={`${this.props.formID}-input`}
              placeholder={`${this.props.defaultValue ? this.props.defaultValue : this.props.placeholder}`}
              value={this.state.input}
              onChange={this.onInput} 
              type="text"
            />
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;