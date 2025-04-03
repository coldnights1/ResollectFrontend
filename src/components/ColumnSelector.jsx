import React from 'react';
import './ColumnSelector.css';

const ColumnSelector = ({ visibleColumns, onToggle }) => {
  const columns = [
    'loanId',
    'loanType',
    'borrower',
    'address',
    'zone',
    'sanctionAmount',
  ];

  return (
    <div className="column-selector">
      <h4>Select Columns</h4>
      {columns.map((col) => (
        <label key={col} className="checkbox">
          <input
            type="checkbox"
            checked={visibleColumns[col]}
            onChange={() => onToggle(col)}
          />
          {col}
        </label>
      ))}
    </div>
  );
};

export default ColumnSelector;
