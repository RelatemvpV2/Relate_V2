import React, { useEffect, useState } from 'react'
import ProgressBar from '../progressBar/ProgressBar';

import '../comparedAnswers/comparedAnswers.css'

const ScoreRow = ({ category }) => {


  const [myAnswer, setMyAnswer] = useState(null);
  const [partnerAnswer, setPartnerAnswer] = useState(null);


  useEffect(() => {
    console.log(category);
    category.answers.map((answer, index) => {
     if(localStorage.getItem("user_id")== answer.userId) {
      setMyAnswer(answer.response)
     } else {
      setPartnerAnswer(answer.response)
     }
  })
    

  }, []);

    return (
      <div className="score-row">
        <div className="category-name">{category.category}</div>
        <div className="scores">
          <div className="score you">{myAnswer}</div>
          <div className="score partner">{partnerAnswer}</div>
        </div>
        <ProgressBar you={myAnswer} partner={partnerAnswer} />
      </div>
    );
}

export default ScoreRow