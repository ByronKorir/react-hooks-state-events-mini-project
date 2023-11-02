import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && selectedCategory) {
      // Create a new task object
      const newTask = {
        text: taskText,
        category: selectedCategory,
      };
      console.log(newTask)
      onTaskFormSubmit(newTask);
      setTaskText("");
      setSelectedCategory("");
    }
    console.log(taskText)
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {
            categories.map((category)=>(
              category !== "All" ?
                <option
                 key={category}
                 value={category}
                >
                  {category}
                </option>
              :""
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
