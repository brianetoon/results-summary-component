import React from 'react';

const Results = () => {
  return (
    <div className="results | text-center padding-40 flow" data-spacing="large">
      <h1 className="section-title | fs-600 fw-bold">Your Result</h1>

      <p className="results-score">
        <span>76</span> of 100
      </p>

      <div className="flow">
        <p className="result-rank | clr-neutral-100 fs-700 fw-bold">Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}

export default Results;
