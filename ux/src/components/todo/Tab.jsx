import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Tab(props) {
  function switchList(e) {
    let target = e.target;
    if (target.classList.contains('todo-tab'))
      target = target.parentNode;
    else
      return;

    props.switchList(target);
  }

  return (
    <div id={props.id} className="todo-tab-container" onClick={switchList}>
      <button className="tab-delete" onClick={props.handleDelete}><FaTrashAlt/></button>
      <div className={`todo-tab ${props.active ? "active" : ""}`}>
          {props.name}
      </div>
    </div>
  );
}

export default Tab;