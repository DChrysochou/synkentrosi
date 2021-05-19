import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function List(props) {
  return (
    <div>
      <div className="todo-list-items">
        {props.entries.map(({ title, _id, completed }) => (
          <React.Fragment key={_id}>
            <div id={_id} className={`todo-item ${completed ? "complete" : ""}`}>
              <button className="todo-delete" onClick={props.handleDelete}><FaTrashAlt/></button>
              <input 
                type="checkbox" 
                className="todo-checkbox" 
                onChange={props.handleChecked}
                checked={completed ? true : false}
              ></input>
              <span>{title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default List;
