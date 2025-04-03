import React, { useState, useRef, useEffect } from 'react';
import './ColumnDropdown.css';

const ColumnDropdown = ({ visibleColumns, onToggle }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const columns = Object.keys(visibleColumns);

  return (
    <div className="column-dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={() => setOpen((prev) => !prev)}>
        Select Columns ▾
      </button>
      {open && (
        <div className="dropdown-menu">
          <strong>Select Columns</strong>
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
      )}
    </div>
  );
};

export default ColumnDropdown;
