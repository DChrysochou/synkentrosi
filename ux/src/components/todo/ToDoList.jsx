import React from 'react';
import axios from 'axios';

import Form from "./Form";
import List from "./List";

/**
 * ToDo List
 * 
 * Requirements:
 * Display a list of ToDo items
 * Provide a way to submit new items to the list
 *    Add button that opens into an input?
 * Provide a way to delete items from the list
 * Each item should have a checkbox that will set it as "done"
 *    Should be able to "uncheck" items as well
 *    Done items should be crossed out; move to bottom of list?
 * Support for multiple lists
 *    Ability to switch between lists
 * Items should be saved to a DB
 *    Implement MongoDB to save between sessions?
 *    Will likely require an API, should be added to srv folder
 * 
 * 
 * Good To Haves:
 * A daily list that will reset itself every day (v2)
 * Lists automatically clear done items every day
 * Reordering of list items
 * Editing of list items
 **/

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.handleChecked = this.handleChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {
    let data = await this.fetchData();
    this.setState(prevState => ({
      items: [...prevState.items, ...data]
    }));
  }

  fetchData = async () => {
    let response = await axios.get('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return await response.data;
  }

  handleSubmit = (title) => {
    if (!title || !title.trim()) return null;

    axios.post('http://localhost:8080/todos/create', {
      title: title,
      completed: false
    })
    .then((res) => {
      this.setState(prevState => ({
        items: [...prevState.items, {
          title: res.data.title,
          key: res.data._id
        }]
      }));
    }).catch((error) => {
        console.log(error)
    });
  }

  handleChecked = (e) => {
    let input = e.target;
    let onOff = input.checked;
  }
  
  render() {
    return (
      <div className="todo-list">
        <div className="todo-header">
          TODO List
        </div> 
        <div className="todo-container">
          <Form onSubmit={this.handleSubmit} />
          <List
            entries={this.state.items}
            handleChecked={this.handleChecked}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;