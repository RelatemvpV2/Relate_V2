import React, { useState } from 'react';
import './assessment.css'; // CSS for custom styles
import SideGreyBg from '../../components/sidegreybg/SideGreyBg';
import MainContainer from '../../components/maincontainer/Maincontainer';
import LightBgMain from '../../components/lightBgMain/LightBgMain';

const Assessment = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      alert(`You rated your relation as: ${rating}`);
    } else {
      alert('Please select a rating.');
    }
  };

  return (
    <div className="assessment-layout">
      <SideGreyBg/>

      <LightBgMain/>

     

      {/* Right Pink Content */}
      {/* <MainContainer >
        <div className="assessment-container">
          <div className="assessment-header">
            <h2>My relation with</h2>
            <p>John Snow</p>
          </div>

          <div className="assessment-question">
            <h3>Overall relation to your partner</h3>
            <p>How would you rate your overall relation to your partner today?</p>
          </div>

          <div className="rating-options">
            {[7, 6, 5, 4, 3, 2, 1].map((value) => (
              <label key={value} className={`rating-item ${rating === String(value) ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  onChange={handleRatingChange}
                  checked={rating === String(value)}
                />
                {value}
              </label>
            ))}
          </div>

          <button className="continue-button" onClick={handleSubmit}>Continue</button>
        </div>
      </MainContainer> */}
    </div>
  );
};

export default Assessment;
