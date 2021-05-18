import React from 'react';

import Form from "./Form";
import List from "./List";
import delegate from "./todoDelegate";

/**
 * ToDo List
 * 
 * Requirements:
 * Display a list of ToDo items (DONE)
 * Provide a way to submit new items to the list (DONE)
 *    Add button that opens into an input?
 * Provide a way to delete items from the list (DONE)
 * Each item should have a checkbox that will set it as "done"
 *    Should be able to "uncheck" items as well
 *    Done items should be crossed out; move to bottom of list?
 * Support for multiple lists
 *    Ability to switch between lists
 * Items should be saved to a DB
 *    Implement MongoDB to save between sessions?
 *    Will likely require an API, should be added to srv folder
 * Add a datestamp to each ToDo item so that we can clear completed >24H ones on load
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
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount = async () => {
    let response = await delegate.getList();
    let data = response && response.data;
    this.setState(prevState => ({
      items: [...prevState.items, ...data]
    }));
  }

  updateListWithNewItem = (data) => {
    this.setState(prevState => ({
      items: [...prevState.items, {
        title: data.title,
        _id: data._id
      }]
    }));
  }

  updateListWithRemovedItem = (removedId) => {
    this.setState(prevState => ({ 
      items: prevState.items.filter(todo => todo._id !== removedId) 
    })); 
  }

  updateListWithToggle = (toggleId, onOff) => {
    let items = [...this.state.items];
    let index = items.findIndex((item)=> { return item._id === toggleId; });
    if (index !== -1) {
      let item = {
        ...items[index],
        completed: onOff
      }
      items[index] = item;
      this.setState({items});
    }
  }

  handleSubmit = (title) => {
    if (!title || !title.trim()) return null;

    delegate.submit({
      title: title,
      completed: false
    },
      (res) => { res.data && this.updateListWithNewItem(res.data); },
      (err) => { console.log(err); }
    );
  }

  handleChecked = (e) => {
    e.preventDefault();

    let input = e.target;
    let idToUpdate = e.target.parentElement && e.target.parentElement.id;
    let onOff = input.checked;
    delegate.toggle({
      id: idToUpdate,
      state: onOff
    },
      (res) => { this.updateListWithToggle(res.data._id, onOff); },
      (err) => { console.log(err); }
    );
  }

  handleDelete = (e) => {
    let todoItem = e.target.parentElement;
    let idToDelete = todoItem && todoItem.id;
    delegate.remove(
      idToDelete, 
      (res) => { res.data && this.updateListWithRemovedItem(res.data._id); },
      (err) => { console.log(err); }
    );
  }
  
  render() {
    return (
      <div id="todo-list">
        <div className="todo-header">
          TODO List
        </div> 
        <div className="todo-container">
          <Form onSubmit={this.handleSubmit} />
          <List
            entries={this.state.items}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;