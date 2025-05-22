import React from 'react';

/**
 * Settings component for configuring system parameters.
 * Allows users to customize application settings and preferences.
 */
// PUBLIC_INTERFACE
const Settings = () => {
  return (
    <div>
      <h2 className="title">Settings</h2>
      <p className="description">Configure system parameters and preferences</p>
      
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">General Settings</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" defaultValue="KAVIA InventoryMaster" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Default Currency</label>
            <select className="form-control" defaultValue="USD">
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Default Warehouse</label>
            <select className="form-control" defaultValue="Warehouse A">
              <option>Warehouse A</option>
              <option>Warehouse B</option>
              <option>Warehouse C</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Notification Settings</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Low Stock Alerts</label>
            <div>
              <input type="checkbox" id="lowStockEmail" defaultChecked />
              <label htmlFor="lowStockEmail" style={{ marginLeft: '5px' }}>Email</label>
              
              <input type="checkbox" id="lowStockSystem" defaultChecked style={{ marginLeft: '15px' }} />
              <label htmlFor="lowStockSystem" style={{ marginLeft: '5px' }}>System Notification</label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">GRN Processing</label>
            <div>
              <input type="checkbox" id="grnEmail" defaultChecked />
              <label htmlFor="grnEmail" style={{ marginLeft: '5px' }}>Email</label>
              
              <input type="checkbox" id="grnSystem" defaultChecked style={{ marginLeft: '15px' }} />
              <label htmlFor="grnSystem" style={{ marginLeft: '5px' }}>System Notification</label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">IBT Status Updates</label>
            <div>
              <input type="checkbox" id="ibtEmail" defaultChecked />
              <label htmlFor="ibtEmail" style={{ marginLeft: '5px' }}>Email</label>
              
              <input type="checkbox" id="ibtSystem" defaultChecked style={{ marginLeft: '15px' }} />
              <label htmlFor="ibtSystem" style={{ marginLeft: '5px' }}>System Notification</label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">User Preferences</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Default Dashboard View</label>
            <select className="form-control">
              <option>Summary Cards</option>
              <option>Par Level Monitoring</option>
              <option>Recent Activity</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Items Per Page</label>
            <select className="form-control">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button className="btn">Save Settings</button>
        <button className="btn" style={{ marginLeft: '10px' }}>Reset to Defaults</button>
      </div>
    </div>
  );
};

export default Settings;
