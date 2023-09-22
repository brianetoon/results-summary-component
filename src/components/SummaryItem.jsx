import React from 'react';

const SummaryItem = ({ item }) => {
  return (
    <li className="summary-item | fw-bold" data-item-type={item.type}>

      <div className="flex-group">
        <img className="summary-icon" src={`icons/${item.icon}`} />
        <h3 className="summary-item-title">
          { item.title }
        </h3>
      </div>

      <p className="summary-score">
        <span className="clr-neutral-700">{ item.score }</span> / 100
      </p>

    </li>
  );
}

export default SummaryItem;
