import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="profile-wrapper" ref={dropdownRef}>
      <div className="profile" onClick={() => setOpen(!open)}>
        <span className="username">Prajit</span>
        <img
          src="https://ui-avatars.com/api/?name=Prajit&background=0D8ABC&color=fff"
          alt="Profile"
          className="avatar"
        />
      </div>

      {open && (
        <div className="profile-dropdown">
          <p className="dropdown-item">👤 View Profile</p>
          <p className="dropdown-item">⚙️ Settings</p>
          <p className="dropdown-item">🚪 Logout</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
