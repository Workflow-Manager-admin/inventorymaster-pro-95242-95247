import React from 'react';

/**
 * Stock Management component for monitoring and managing inventory levels.
 * Provides tools for tracking stock, setting par levels, and managing inventory.
 */
// PUBLIC_INTERFACE
const StockManagement = () => {
  // Sample inventory data
  const inventoryItems = [
    { id: 'ITM001', name: 'Product A', category: 'Category 1', currentStock: 125, parLevel: 50, location: 'Warehouse A' },
    { id: 'ITM002', name: 'Product B', category: 'Category 2', currentStock: 32, parLevel: 40, location: 'Warehouse B' },
    { id: 'ITM003', name: 'Product C', category: 'Category 1', currentStock: 78, parLevel: 60, location: 'Warehouse A' },
    { id: 'ITM004', name: 'Product D', category: 'Category 3', currentStock: 15, parLevel: 30, location: 'Warehouse C' },
    { id: 'ITM005', name: 'Product E', category: 'Category 2', currentStock: 54, parLevel: 45, location: 'Warehouse B' },
  ];

  return (
    <div>
      <h2 className="title">Stock Management</h2>
      <p className="description">Manage and monitor inventory levels across all locations</p>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
        </div>
        <div>
          <button className="btn">Add New Item</button>
          <button className="btn" style={{ marginLeft: '10px' }}>Adjust Stock</button>
          <button className="btn" style={{ marginLeft: '10px' }}>Export Inventory</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Inventory Items</h3>
          <div>
            <input 
              type="text" 
              placeholder="Search items..." 
              className="form-control" 
              style={{ width: '250px', display: 'inline-block' }}
            />
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Par Level</th>
                <th>Status</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.currentStock}</td>
                  <td>{item.parLevel}</td>
                  <td>
                    <span 
                      className={`badge ${
                        item.currentStock > item.parLevel ? 'badge-success' : 
                        item.currentStock > item.parLevel * 0.5 ? 'badge-warning' : 'badge-error'
                      }`}
                    >
                      {item.currentStock > item.parLevel ? 'Adequate' : 
                       item.currentStock > item.parLevel * 0.5 ? 'Low' : 'Critical'}
                    </span>
                  </td>
                  <td>{item.location}</td>
                  <td>
                    <button className="btn">View</button>
                    <button className="btn" style={{ marginLeft: '5px' }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Stock Adjustment</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Item</label>
            <select className="form-control">
              <option>Select Item</option>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
              <option>Product D</option>
              <option>Product E</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Adjustment Type</label>
            <select className="form-control">
              <option>Select Type</option>
              <option>Addition</option>
              <option>Reduction</option>
              <option>Correction</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Quantity</label>
            <input type="number" className="form-control" min="1" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Reason</label>
            <select className="form-control">
              <option>Select Reason</option>
              <option>New Stock</option>
              <option>Damaged</option>
              <option>Expired</option>
              <option>Inventory Count</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows="2"></textarea>
          </div>
          
          <button className="btn">Submit Adjustment</button>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;
