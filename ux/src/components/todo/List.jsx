import React from 'react';

function List(props) {
  return (
    <div>
      <div id="todo-list">
        {props.entries.map(({ title, _id, completed }) => (
          <React.Fragment key={_id}>
            <div id={_id} className="todo-item">
              <input 
                type="checkbox" 
                className="todo-checkbox" 
                onChange={props.handleChecked}
                checked={completed ? true : false}
              ></input>
              <span>{title}</span>
              <button className="todo-delete" onClick={props.handleDelete}>Garbage</button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default List;