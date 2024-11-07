import React, { useState, useRef, useEffect } from 'react'
// import { createPopper } from '@popperjs/core';

import Button from '../button/Button';
import PopUpComponent from '../popUp/PopUpComponent'

const RecommendedAndMoreCategories = ({ isHovered,showAllCategories,setShowAllCategories }) => {

  // List of categories with their selected status
  const [categories, setCategories] = useState([
    { name: "Communication", selected: true },
    { name: "Intimacy", selected: true },
    { name: "Economy", selected: true },
    { name: "Values", selected: false },
    { name: "Child rearing", selected: false },
    { name: "Trust", selected: false },
    { name: "Boundaries", selected: false },
    { name: "Everyday Life", selected: false },
  ]);

  const selectedCount = categories.filter((category) => category.selected).length;

  // Toggle category selection
  const handleCategoryToggle = (index) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) => {
        if (i === index) {
          // Prevent selecting more than 3 categories
          if (!category.selected && selectedCount >= 3) {
            // toggleDialog();
            alert("You can only select up to 3 categories.")
            return category; // No change
          }
          return { ...category, selected: !category.selected };
        }
        return category;
      })
    );
  };

  useEffect(() => {

  }, [isHovered])


  return (
    <div className="category-selection">
      {/* {isDialogOpen && <PopUpComponent buttonRef={buttonRef} dialogRef={dialogRef} error={"You can only select up to 3 categories."} toggleDialog={toggleDialog} />} */}

      <ul>
        {categories
          .filter((category) => showAllCategories || category.selected)
          .map((category, index) => (
            <li key={index}>
              <label>
              <input
                  type="checkbox"
                  checked={category.selected}
                  onChange={() => handleCategoryToggle(index)}
                  style={{ display: /* showAllCategories ? "inline" :  */"none" }} // Show checkbox only in expanded view
                />
                <span className={`dot ${category.selected ? "selected" : ""}`}></span>
                {category.name}
              </label>
            </li>
          ))}
      </ul>

      <p className='link-p'>
        {showAllCategories ? (
          <span>Un-mark to mark new categories</span>
        ) : (
          <span onClick={(event) => {
            event.preventDefault();
            setShowAllCategories(true)

          }}>
            Click to see other categories or to swap to other categories
          </span>
        )}
      </p>

      {showAllCategories && (
        <Button
          className='card-category-selection-btn'
          onClick={(event) => {
            setShowAllCategories(false)

          }}>Selection OK</Button>
      )}
    </div>

  )
}

export default RecommendedAndMoreCategories