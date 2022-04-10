import {React , useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [taskData, setTaskData] = useState(TASKS);
  const [ taskCategory , setTaskCategory] = useState("All")
  const [ newTaskCategory , setNewTaskCategory] = useState("Code")
  const [ newTaskDetails , setNewTaskDetails] = useState("")
 

  function handleCategoryClick(event) {
    console.log(event.target.textContent)
    setTaskCategory(event.target.textContent)
  }

  
  function handleNewTaskCategory(event) {
    setNewTaskCategory(event.target.value)
    console.log(event.target.value)
  }

  function handleNewTaskDetails(event) {

    setNewTaskDetails(event.target.value)
  }

  const newTask = {
    id : uuid() ,
    text : newTaskDetails , 
    category : newTaskCategory ,
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault()
    let tasksDataArray = [...taskData , newTask]
    setTaskData(tasksDataArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} taskCategory={taskCategory}/>
      <NewTaskForm 
        onTaskFormSubmit={handleTaskFormSubmit} 
        categories={CATEGORIES}
        onNewTaskCateogry={handleNewTaskCategory}
        onNewTaskDetails={handleNewTaskDetails}
        newTaskCategory={newTaskCategory}
        newTaskDetails={newTaskDetails}
      />
      <TaskList tasks={taskData} taskCategory={taskCategory}/>
    </div>
  );
}

export default App;
