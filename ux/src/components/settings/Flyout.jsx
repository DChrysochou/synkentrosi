import React from 'react';
import Form from './Form';

class Flyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleNameSubmit.bind(this);
    this.handleTodoListSubmit.bind(this);
  }

  handleNameSubmit = (name) => {
    this.props.hanleNameChange(name);
  }

  handleTodoListSubmit = (name) => {
    this.props.handleTodoListSubmit(name);
  }

  render() {
    return (
      <div className="flyout-container">
        <Form // Name input
          formID="name"
          formLabel="Name"
          onSubmit={this.handleNameSubmit}
          placeholder="Enter your preferred name"
          defaultValue={this.props.name}
        />
        <Form // Todo list
          formID="todo"
          formLabel="Todo List"
          onSubmit={this.handleTodoListSubmit}
          placeholder="Create new Todo list"
        />
      </div>
    );
  }
}

export default Flyout;