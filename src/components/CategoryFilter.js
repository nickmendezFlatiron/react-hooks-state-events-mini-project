import React from "react";


function CategoryFilter({categories , handleCategoryClick , taskCategory}) {

  const categoryButtons = categories.map(category =>{
    let categoryClass = category === taskCategory ? "selected" : "" ;

    return (<button key={category} onClick={(event) => handleCategoryClick(event)} className={categoryClass}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
