import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

/**
 * Main layout component for the InventoryMaster Pro application.
 * Defines the overall page structure with header, sidebar, and content area.
 */
// PUBLIC_INTERFACE
const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
