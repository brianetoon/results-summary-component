import React from 'react';
import SummaryItem from './SummaryItem';

const Summary = () => {

  const summaryItems = [
    { title: "Reaction", icon: "icon-reaction.svg", score: 80, type: "accent-1", id: 1 },
    { title: "Memory", icon: "icon-memory.svg", score: 92, type: "accent-2", id: 2 },
    { title: "Verbal", icon: "icon-verbal.svg", score: 61, type: "accent-3", id: 3 },
    { title: "Visual", icon: "icon-visual.svg", score: 72, type: "accent-4", id: 4 },
  ]

  return (
    <div className="summary | padding-40 flow" data-spacing="large">
      <h2 className="section-title | fs-600 fw-bold">Summary</h2>
      
      <ul className="flow">
        {summaryItems.map(item => (
          <SummaryItem item={item} key={item.id} />
        ))}
      </ul>

      <button className="button | width-100" data-type="primary">
        Continue
      </button>
    </div>
  );
}

export default Summary;
