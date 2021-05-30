import React from 'react';

function Tab(props) {
  function switchList(e) {
    let target = e.currentTarget;
    props.switchList(target);
  }

  return (
    <div 
      className={`todo-tab ${props.active ? "active" : ""}`}
      onClick={switchList}>
        {props.name}
    </div>
  );
}

export default Tab;