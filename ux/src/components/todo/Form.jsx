import React from 'react';
import { FaPlus } from 'react-icons/fa';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
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

  render () {
    return (
      <form id="todo-form" onSubmit={this.onSubmit.bind(this)}>
        <input placeholder="Enter a TODO" value={this.state.input} onChange={this.onInput} type="text"/>
        <button type="submit"><FaPlus/></button>
      </form>
    )
  }
}

export default Form;   