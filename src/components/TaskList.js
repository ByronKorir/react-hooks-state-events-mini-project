import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, setSelectedTasks}) {

  

  function handleDelete(text){
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setSelectedTasks(updatedTasks);
  }
  return (
    <div className="tasks">
      {
        tasks.map((task)=>(
          <Task key={task.text} onDelete={handleDelete} task={task}/>
        ))
      }
    </div>
  );
}

export default TaskList;
