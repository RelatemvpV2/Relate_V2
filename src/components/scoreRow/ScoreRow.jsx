import React from 'react'
import ProgressBar from '../progressBar/ProgressBar';

import '../comparedAnswers/comparedAnswers.css'

const ScoreRow = ({ category }) => {
    const { name, you, partner } = category;

    return (
      <div className="score-row">
        <div className="category-name">{name}</div>
        <div className="scores">
          <div className="score you">{you}</div>
          <div className="score partner">{partner}</div>
        </div>
        <ProgressBar you={you} partner={partner} />
      </div>
    );
}

export default ScoreRow