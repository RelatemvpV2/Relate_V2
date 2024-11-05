import React, { useState, useRef, useEffect } from 'react'
// import { createPopper } from '@popperjs/core';

import Button from '../button/Button';
import PopUpComponent from '../popUp/PopUpComponent'

const RecommendedAndMoreCategories = ({ isSelected }) => {

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

  // State to toggle between views
  const [showAllCategories, setShowAllCategories] = useState(false);

  /*   const [isDialogOpen, setDialogOpen] = useState(false);
    const buttonRef = useRef(null);
    const dialogRef = useRef(null); */

  // const toggleDialog = () => {
  //   setDialogOpen(!isDialogOpen);

  //   if (!isDialogOpen && buttonRef.current && dialogRef.current) {
  //     createPopper(buttonRef.current, dialogRef.current, {
  //       placement: 'bottom',
  //     });
  //   }
  // };

  // const link = document.querySelector('.link-p');
  const parent = document.querySelector('.subscription-plans');
  const cardRecommended = document.querySelector('.plan-card:nth-child(2)')

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

  }, [isSelected])


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
          <span disabled={!isSelected} onClick={(event) => {
            console.log(isSelected)
            event.preventDefault();
            event.stopPropagation()
            if (isSelected) {
              console.log(isSelected, "if")
             parent && (parent.style.alignItems = 'center')
             cardRecommended && (cardRecommended.style.height = "700px")
            }
           /*  else {
              console.log(isSelected, "else")
              parent && (parent.style.alignItems = 'flex-end')
              cardRecommended && (cardRecommended.style.height = "443px")
            } */

            console.log("Link clicked")
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
            event.stopPropagation()
            parent && (parent.style.alignItems = 'flex-end')
            cardRecommended && (cardRecommended.style.height = "573px")
            setShowAllCategories(false)

          }}>Selection OK</Button>
      )}
    </div>

  )
}

export default RecommendedAndMoreCategories