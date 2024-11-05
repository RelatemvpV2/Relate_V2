// PlanCard.js
import React, { useState } from 'react';
import CardCheckins from './CardCheckins';
import RecommendedAndMoreCategories from './RecommendedAndMoreCategories';
import WorkWithAllCategories from './WorkWithAllCategories';
import Button from '../button/Button'

import './subscriptionCard.css';

const SubscriptionPlanCard = ({
    isRecommended = false,
    title,
    link = "",
    description2 = "",
    description,
    price,
    priceDescription,
    categories = [],
    maxCategories = 0,
    onSaveSelection,
    isSelected,
    onSelect,
}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
            handleSaveSelection();
        } else if (selectedCategories.length < maxCategories) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSaveSelection = () => {
        onSaveSelection(selectedCategories);
    };

    return (
        <div className={`plan-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
            <div className='card-title'>
                <span>{isRecommended && "Recommended "}</span>
                <h4>{title}</h4>
            </div>
            <p>{description}</p>

            {title === 'Preventive check-in' && <CardCheckins />}
            {title === 'Work with 3 categories' && <RecommendedAndMoreCategories isSelected={isSelected}/>}
            {title === 'Work with all categories' && <WorkWithAllCategories categories={categories} />}

            <div className='planCard-footer'>
                {/* Divider */}
                <div className="divider-horizantal" style={{ margin: "auto" }}></div>

                <p className="price">{price}</p>
                <p className="price-description">{priceDescription}</p>
                <Button className='plan-card-button'>Proceed</Button>
            </div>
        </div>
    );
};

export default SubscriptionPlanCard;
