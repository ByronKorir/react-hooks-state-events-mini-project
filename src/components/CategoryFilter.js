import React from "react";

function CategoryFilter({categories, onSelect, selectedCategory}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category) => (
          <button
         className={
          selectedCategory===category? "selected":""
         }
          onClick={()=>onSelect(category)}
          >{category}</button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;
