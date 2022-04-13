import React from "react";

function Task({text , category, handleRemovedTask }) {

  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemovedTask}>X</button>
    </div>
  );
}

export default Task;
