import React from 'react';
import Results from './Results';
import Summary from './Summary';

const ResultsSummary = () => {
  return (
    <div className="results-summary | even-columns">
      <Results />
      <Summary />
    </div>
  );
}

export default ResultsSummary;
