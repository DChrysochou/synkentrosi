import React from 'react';

function List(props) {
  return (
    <div>
      <ul id="todo-list">
        {props.entries.map(({ title, key }) => (
          <React.Fragment key={key}>
            <input type="checkbox" className="todo-checkbox" onChange={props.handleChecked}></input>
            <li>{title}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default List;
