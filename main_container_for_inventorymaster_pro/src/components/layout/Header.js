import React from 'react';

/**
 * Header component for the InventoryMaster Pro application.
 * Displays the application title and user controls.
 */
// PUBLIC_INTERFACE
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-symbol">*</span> InventoryMaster Pro
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
        <button className="btn">Notifications</button>
        <button className="btn">User Profile</button>
      </div>
    </header>
  );
};

export default Header;
