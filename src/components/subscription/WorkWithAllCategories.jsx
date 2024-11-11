import React from 'react'

const WorkWithAllCategories = ({categories}) => {
    // console.log("categories",categories)
  return (
    <div className="all-categories-container">{categories.length > 0 && (
        <ul>
            {categories.map((category) => (
                <li key={category}>
                   
                        {category}
                 
                </li>
            ))}
        </ul>
    )
       
    }</div>
  )
}

export default WorkWithAllCategories