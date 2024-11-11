import React from 'react'
import ProgressBar from '../progressBar/ProgressBar';

import '../comparedAnswers/comparedAnswers.css'

const ScoreRow = ({ category }) => {

    return (
      <div className="score-row">
        <div className="category-name">{category.category}</div>
        <div className="scores">
          <div className="score you">{category.answers[0].score}</div>
          <div className="score partner">{category.answers[1].score}</div>
        </div>
        <ProgressBar you={category.answers[0].score} partner={category.answers[1].score} />
      </div>
    );
}

export default ScoreRow