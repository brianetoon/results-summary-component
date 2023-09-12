import React from 'react';

const Results = () => {
  return (
    <div className="results flow" data-spacing="large">
      <h1 className="section-title">Your Result</h1>

      <p className="result-score">
        <span>76</span> of 100
      </p>

      <div className="flow">
        <p className="result-rank">Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}

export default Results;
