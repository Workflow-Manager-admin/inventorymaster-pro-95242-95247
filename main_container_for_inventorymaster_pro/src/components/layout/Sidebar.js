import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar navigation component providing links to all major sections
 * of the InventoryMaster Pro application.
 */
// PUBLIC_INTERFACE
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📊</span> Dashboard
        </NavLink>
        <NavLink to="/procurement" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">🛒</span> Procurement
        </NavLink>
        <NavLink to="/stock" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📦</span> Stock Management
        </NavLink>
        <NavLink to="/grn" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📝</span> Goods Receipt Notes
        </NavLink>
        <NavLink to="/ibt" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">🔄</span> Inter-Branch Transfers
        </NavLink>
        <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">⚙️</span> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
