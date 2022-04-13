import {React , useState} from "react";
import Task from "./Task";
import { v4 as uuid } from 'uuid';

function TaskList({tasks, taskCategory}) {

  const [removedTask , setRemovedTask] = useState(tasks)

  
  function handleRemovedTask(task) {
    const deleteTask = removedTask.filter(arrayTask => arrayTask.text !== task.text)
    setRemovedTask(deleteTask)
  }
  

  const filteredTasks = removedTask.filter(task => {
    if (taskCategory === "All") {
      return true 
    } return task.category === taskCategory
  })

 
  const listOfTasks = filteredTasks.map(task => { 
    const {text , category}  = task ;
    return ( <Task text={text} category={category} key={uuid()} handleRemovedTask={() =>handleRemovedTask(task)} /> )
  })

  
  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
