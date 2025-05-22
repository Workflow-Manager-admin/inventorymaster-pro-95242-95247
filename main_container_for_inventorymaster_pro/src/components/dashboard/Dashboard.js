import React from 'react';

/**
 * Dashboard component displaying key inventory metrics and status.
 * Shows summary cards and real-time par level monitoring.
 */
// PUBLIC_INTERFACE
const Dashboard = () => {
  // Sample data for dashboard metrics
  const inventoryStats = {
    totalItems: 1248,
    lowStock: 32,
    pendingOrders: 17,
    pendingTransfers: 5
  };
  
  return (
    <div>
      <h2 className="title">Dashboard</h2>
      <p className="description">Real-time inventory metrics and stock status</p>
      
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Inventory Summary</h3>
          </div>
          <div>
            <p><strong>Total Items:</strong> {inventoryStats.totalItems}</p>
            <p><strong>Low Stock Items:</strong> <span className="badge badge-warning">{inventoryStats.lowStock}</span></p>
            <p><strong>Pending Orders:</strong> {inventoryStats.pendingOrders}</p>
            <p><strong>Pending Transfers:</strong> {inventoryStats.pendingTransfers}</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Par Level Monitoring</h3>
          </div>
          <div>
            <p>Items below par level: <span className="badge badge-error">24</span></p>
            <p>Items near par level: <span className="badge badge-warning">18</span></p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
          </div>
          <div>
            <p>GRN #1082 processed - 2 hours ago</p>
            <p>IBT #321 completed - 4 hours ago</p>
            <p>Purchase Indent #89 approved - Yesterday</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Quick Links</h3>
          </div>
          <div>
            <button className="btn">Create Purchase Indent</button>
            <button className="btn" style={{ marginLeft: '10px' }}>New IBT</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Low Stock Items</h3>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Name</th>
                <th>Current Stock</th>
                <th>Par Level</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ITM001</td>
                <td>Product A</td>
                <td>15</td>
                <td>50</td>
                <td><span className="badge badge-error">Critical</span></td>
              </tr>
              <tr>
                <td>ITM023</td>
                <td>Product B</td>
                <td>32</td>
                <td>40</td>
                <td><span className="badge badge-warning">Low</span></td>
              </tr>
              <tr>
                <td>ITM045</td>
                <td>Product C</td>
                <td>28</td>
                <td>30</td>
                <td><span className="badge badge-warning">Low</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
