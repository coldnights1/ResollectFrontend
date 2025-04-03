import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    'Dashboard',
    'Portfolio',
    'Notifications',
    'Auction',
    'Data Upload',
    'Control Panel',
    'User Management',
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">🏦 Resollect</h2>
      <ul className="nav-list">
        {navItems.map((item, idx) => (
          <li key={idx} className="nav-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
