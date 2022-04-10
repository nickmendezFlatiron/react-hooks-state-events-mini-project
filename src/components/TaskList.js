import React from "react";
import Task from "./Task";
import { v4 as uuid } from 'uuid';

function TaskList({tasks, taskCategory}) {

 

  let filteredTasks = tasks.filter(task => {
    if (taskCategory === "All") {
      return true 
    } return task.category === taskCategory
  })


  let listOfTasks = filteredTasks.map(task => { 
    const {text , category}  = task ;
    return ( <Task text={text} category={category} key={uuid()} /> )
  })

  
  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
