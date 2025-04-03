import React from 'react';
import './Filters.css';

const Filters = ({ selectedZone, selectedType, onZoneChange, onTypeChange }) => {
  return (
    <div className="filters-container">
      <select value={selectedZone} onChange={(e) => onZoneChange(e.target.value)}>
        <option value="">All Zones</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="West">West</option>
      </select>

      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Loan Types</option>
        <option value="Car Loan">Car Loan</option>
        <option value="Home Loan">Home Loan</option>
        <option value="Personal Loan">Personal Loan</option>
      </select>
    </div>
  );
};

export default Filters;
