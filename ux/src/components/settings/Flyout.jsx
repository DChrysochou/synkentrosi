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
    this.props.handleNameChange(name);
  }

  handleTodoListSubmit = (name) => {
    if (!name) return;
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
          formID="todo-list"
          formLabel="Todo List"
          onSubmit={this.handleTodoListSubmit}
          placeholder="Create new Todo list"
        />
      </div>
    );
  }
}

export default Flyout;