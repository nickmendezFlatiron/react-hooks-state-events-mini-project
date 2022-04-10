import { React } from "react";
import {v4 as uuid } from 'uuid';


function NewTaskForm({categories, NewTaskDetails , onNewTaskCateogry , newTaskCategory, onNewTaskDetails, onTaskFormSubmit }) {
  
   const categoriesCopy = [...categories]
  categoriesCopy.shift()
  

  let categoryList = categoriesCopy.map(category => {
    return (<option key={uuid()} >{category}</option>)
  })

  
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={NewTaskDetails} onChange={onNewTaskDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={onNewTaskCateogry}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
