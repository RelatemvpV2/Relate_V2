import React from 'react';

import '../comparedAnswers/comparedAnswers.css'

function ProgressBar({ you, partner }) {
  return (
    <div className="progress-bar">
      <div
        className="bar you-bar"
        style={{ width: `${(you / 7) * 100}%` }}
      ></div>
      <div
        className="bar partner-bar"
        style={{ width: `${(partner / 7) * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;