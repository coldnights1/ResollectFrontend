import React from 'react';
import Sidebar from './components/Sidebar';
import PortfolioTable from './components/PortfolioTable';
import Profile from './components/Profile';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f8' }}>
        {/* Top-right Profile */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#f4f6f8',
        }}>
          <Profile />
        </div>

        {/* Main content area */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <PortfolioTable />
        </div>
      </div>
    </div>
  );
};

export default App;
