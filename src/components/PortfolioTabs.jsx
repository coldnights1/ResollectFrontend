import React from 'react';
import './PortfolioTabs.css';

const tabOptions = [
  'All',
  'Pre Sarsfaesi',
  'NPA',
  '13(3) Responses',
  'Symbolic Possession',
  'DM Order',
  'Physical Possessions',
  'Auctions',
];

const PortfolioTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="portfolio-tabs">
      {tabOptions.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PortfolioTabs;
