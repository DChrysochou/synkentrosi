import React from 'react';

import Form from "./Form";
import List from "./List";
import Tab from "./Tab";
import delegate from "./todoDelegate";

import '../../style/css/ToDoList.css';

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
      items: [],
      lists: [],
      activeList: 0
    }

    this.handleChecked = this.handleChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.switchList = this.switchList.bind(this);
  }

  componentDidMount = async () => {
    let itemData = await delegate.getAllItems();
    let listsData = await delegate.getLists();
    let items = itemData && itemData.data;
    let lists = listsData && listsData.data.filter((list)=> { return !!list.name });

    this.setState(prevState => ({
      items: [...prevState.items, ...items],
      lists: [...prevState.lists, ...lists]
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

    let activeList = this.state.lists[this.state.activeList];

    delegate.submit({
      title: title,
      completed: false,
      list: activeList
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

  getIDToRemove = (e) => {
    let item = e.currentTarget.parentElement;
    let idToDelete = item && item.id;
    return idToDelete;
  }

  handleDelete = (e) => {
    let idToDelete = this.getIDToRemove(e);
    delegate.remove(
      idToDelete, 
      (res) => { res.data && this.updateListWithRemovedItem(res.data._id); },
      (err) => { console.log(err); }
    );
  }

  createNewList = (name) => {
    delegate.newList(
      {name: name}, 
      (res) => { this.setState(prevState => ({ lists: [...prevState.lists, res.data] })); },
      (err) => { console.log(err); }
    );
  }

  deleteList = (e) => {
    let idToDelete = this.getIDToRemove(e);
    delegate.deleteList(
      idToDelete, 
      (res) => { this.setState(prevState => ({ lists: prevState.lists.filter(list => list._id !== res.data._id) })); },
      (err) => { console.log(err); }
    );
  }

  switchList = (target) => {
    if (target.classList.contains('active')) return;

    let list = target.parentNode;
    let index = Array.prototype.indexOf.call(list.children, target);
    this.setState({
      activeList: index
    }) 
  }
  
  render() {
    return (
      <div id="todo-list">
        <div className="todo-tabs">
          {this.state.lists.map(function({name, _id}, index){
            return <Tab
              name={name}
              id={_id}
              key={index}
              active={this.state.activeList === index}
              switchList={this.switchList}
              handleDelete={this.deleteList}
            />
          }, this)}
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