import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
const [selectedCategory,setSelectedCategory] = useState()
const [selectedTasks,setSelectedTasks] = useState(TASKS)
//displaying categories
  function handleFilter(category){
    setSelectedCategory(category)
    setSelectedTasks(filtered(category))
  }

  const handleFormSubmit = (newTask) => {
    console.log(newTask)
    setSelectedTasks([...selectedTasks, newTask]);
  }
 console.log (selectedCategory)
function filtered(x){
    //const filteredTasks = 
    return(
    TASKS.filter((task) => {
      if(x){
        
        return task.category===x
      }else{
        return TASKS
      }
      
    }))
  }
    console.log(filtered())
    //setSelectedTasks(filteredTasks)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} onSelect={handleFilter} categories={CATEGORIES}/>
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={selectedTasks} setSelectedTasks={setSelectedTasks}/>
    </div>
  );
}

export default App;
