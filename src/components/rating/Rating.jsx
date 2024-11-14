import React, { useEffect, useState } from 'react'
//css
import './Rating.css';

const Rating = ({ onRatingSelected, options }) => {

    const [isScoreSelected, setIsScoreSelected] = useState(false);
    const [ratingActiveId, setRatingActiveId] = useState(null);
    const [info, setInfo] = useState();

    const handleRatingClick = (id) => {
        if (id != null) {
            setRatingActiveId(id); // Update the active option ID
            onRatingSelected(id)
            setIsScoreSelected(true);
            setInfo(null);
        }
    };

    useEffect(() => {
        setRatingActiveId(null); // Update the active option ID
        onRatingSelected(null)
        setIsScoreSelected(false);
    }, []);

    // const ratings = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="rating-container">
            <div className="rating-scale">

                {options && options.length > 1 ?
                    options.map((option, i) => <div
                        key={`option${i + 1}`}
                        className={`rating-item ${ratingActiveId === option.labelText && "selected"
                            } ${(option.labelText === "1") && "rating-label-not-good"
                            } ${option.labelText === "7" && "rating-label-very-good"} `}
                        onClick={() => handleRatingClick(option.labelText)}
                    >
                        {option.labelText}
                    </div>
                    ) : <></>
                }
            </div>
            {/* <div className="rating-label not-good">Not Good</div> */}

        </div>

    )
}

export default Rating