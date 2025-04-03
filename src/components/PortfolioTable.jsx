import React, { useState } from 'react';
import ColumnDropdown from './ColumnDropdown';
import Filters from './Filters';
import PortfolioTabs from './PortfolioTabs';
import './PortfolioTable.css';

const sampleData = [
  {
    loanId: 'LBJ1234',
    loanType: 'Car Loan',
    borrower: 'Divit Vora',
    address: '305 UGF, Katargam',
    zone: 'West',
    sanctionAmount: '₹ 10,00,000',
    category: 'Symbolic Possession',
  },
  {
    loanId: 'LBJ2235',
    loanType: 'Home Loan',
    borrower: 'Hitesh Soni',
    address: 'ABC Street, Delhi',
    zone: 'South',
    sanctionAmount: '₹ 25,00,000',
    category: 'DM Order',
  },
  {
    loanId: 'LBJ3478',
    loanType: 'Personal Loan',
    borrower: 'Naren Sahu',
    address: '789 Ring Road',
    zone: 'North',
    sanctionAmount: '₹ 5,00,000',
    category: 'NPA',
  },
];

const PortfolioTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [activeTab, setActiveTab] = useState('All');
  const [visibleColumns, setVisibleColumns] = useState({
    loanId: true,
    loanType: true,
    borrower: true,
    address: true,
    zone: true,
    sanctionAmount: true,
  });

  const handleToggleColumn = (col) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [col]: !prev[col],
    }));
  };

  const handleSort = (columnKey) => {
    setSortConfig((prev) => {
      if (prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        return {
          key: columnKey,
          direction: 'asc',
        };
      }
    });
  };

  const filteredData = sampleData.filter((item) => {
    const matchesSearch = item.loanId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === '' || item.zone === selectedZone;
    const matchesType = selectedType === '' || item.loanType === selectedType;
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    return matchesSearch && matchesZone && matchesType && matchesTab;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (typeof valA === 'string') {
      return sortConfig.direction === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
  });

  return (
    <div className="portfolio-container">
      {/* Tabs (Top Bar) */}
      <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Header: Search + Column Selector */}
      <div className="portfolio-header">
        <input
          type="text"
          placeholder="Search Loan Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <ColumnDropdown
          visibleColumns={visibleColumns}
          onToggle={handleToggleColumn}
        />
      </div>

      {/* Filters */}
      <Filters
        selectedZone={selectedZone}
        selectedType={selectedType}
        onZoneChange={setSelectedZone}
        onTypeChange={setSelectedType}
      />

      {/* Table */}
      <div className="table-wrapper">
        <table className="portfolio-table">
          <thead>
            <tr>
              {visibleColumns.loanId && (
                <th onClick={() => handleSort('loanId')}>
                  Loan ID {sortConfig.key === 'loanId' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
              {visibleColumns.loanType && (
                <th onClick={() => handleSort('loanType')}>
                  Loan Type {sortConfig.key === 'loanType' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
              {visibleColumns.borrower && (
                <th onClick={() => handleSort('borrower')}>
                  Borrower {sortConfig.key === 'borrower' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
              {visibleColumns.address && (
                <th onClick={() => handleSort('address')}>
                  Address {sortConfig.key === 'address' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
              {visibleColumns.zone && (
                <th onClick={() => handleSort('zone')}>
                  Zone {sortConfig.key === 'zone' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
              {visibleColumns.sanctionAmount && (
                <th onClick={() => handleSort('sanctionAmount')}>
                  Sanction Amount {sortConfig.key === 'sanctionAmount' && (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((item, index) => (
                <tr key={index}>
                  {visibleColumns.loanId && <td>{item.loanId}</td>}
                  {visibleColumns.loanType && <td>{item.loanType}</td>}
                  {visibleColumns.borrower && <td>{item.borrower}</td>}
                  {visibleColumns.address && <td>{item.address}</td>}
                  {visibleColumns.zone && <td>{item.zone}</td>}
                  {visibleColumns.sanctionAmount && <td>{item.sanctionAmount}</td>}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No matching records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;
