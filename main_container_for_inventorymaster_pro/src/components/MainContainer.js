import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './dashboard/Dashboard';
import PurchaseIndents from './procurement/PurchaseIndents';
import StockManagement from './stock/StockManagement';
import GoodsReceiptNotes from './grn/GoodsReceiptNotes';
import InterBranchTransfers from './ibt/InterBranchTransfers';
import Settings from './layout/Settings';

/**
 * Main Container for InventoryMaster Pro.
 * Serves as the primary container for the inventory management system,
 * managing navigation and layout for all modules.
 */
// PUBLIC_INTERFACE
const MainContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default route redirects to dashboard */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          {/* Main application routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="procurement" element={<PurchaseIndents />} />
          <Route path="stock" element={<StockManagement />} />
          <Route path="grn" element={<GoodsReceiptNotes />} />
          <Route path="ibt" element={<InterBranchTransfers />} />
          <Route path="settings" element={<Settings />} />
          
          {/* Fallback for any undefined routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainContainer;
