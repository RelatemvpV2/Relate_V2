import React, { useState } from 'react'
//css
import './Rating.css';

const Rating = ({onRatingSelected, answer}) => {

    const [isScoreSelected, setIsScoreSelected] = useState(false);
    const [ratingActiveId, setRatingActiveId] = useState(answer);
    const [info, setInfo] = useState();

    const handleRatingClick = (id) => {
        setRatingActiveId(id); // Update the active option ID
        onRatingSelected(id)
        setIsScoreSelected(true);
        setInfo(null);
    };

    const ratings = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="rating-container">
            {/* <div className="rating-title">You</div> */}
            {/* <div className="rating-label very-good">Very Good</div> */}
            <div className="rating-scale">
            
                {
                    ratings.map((eachRating, i) => <div
                        key={`option${i + 1}`}
                        className={`rating-item ${ratingActiveId === eachRating && "selected"
                            } ${(eachRating === 1) && "rating-label-not-good"
                            } ${eachRating === 7 && "rating-label-very-good"} ` }
                        onClick={() => handleRatingClick(eachRating)}
                    >
                        {eachRating}
                    </div>
                    )
                }
            </div>
{/* <div className="rating-label not-good">Not Good</div> */}
            
        </div>

    )
}

export default Rating