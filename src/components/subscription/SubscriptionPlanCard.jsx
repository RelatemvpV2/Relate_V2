// PlanCard.js
import React, { useState , useEffect} from 'react';
import CardCheckins from './CardCheckins';
import RecommendedAndMoreCategories from './RecommendedAndMoreCategories';
import WorkWithAllCategories from './WorkWithAllCategories';
import Button from '../button/Button'

import './subscriptionCard.css';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const SubscriptionPlanCard = ({
    isRecommended = false,
    id,
    title,
    link = "",
    description2 = "",
    description,
    price,
    priceDescription,
    categories = [],
    maxCategories = 0,
    onSaveSelection,
    handleHover,
    isHovered,
    showAllCategories,
    setShowAllCategories

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

        <div
     
            className={`plan-card ${isHovered ? 'hovered' : ''} ` }
            style={{height:showAllCategories?"700px":""}}
            key={id}
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={() => {
                handleHover(null)
                if(showAllCategories)  setShowAllCategories(false)
            }}
        >
            <div className='card-title'>
                <span>{isRecommended && "Recommended "}</span>
                <h4>{title}</h4>
            </div>
            <p>{description}</p>

            {id === 'Preventive check-in' && <CardCheckins />}

            {id === 'Work with 3 categories' && <RecommendedAndMoreCategories
                isHovered={isHovered}
                showAllCategories={showAllCategories}
                setShowAllCategories={setShowAllCategories}
            />}

            {id === 'Work with all categories' && <WorkWithAllCategories categories={categories} />}

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
