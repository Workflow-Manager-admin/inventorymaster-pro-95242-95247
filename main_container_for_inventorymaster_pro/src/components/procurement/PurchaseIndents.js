import React from 'react';

/**
 * Procurement component handling purchase indents and order creation.
 * Manages the procurement workflow for inventory items.
 */
// PUBLIC_INTERFACE
const PurchaseIndents = () => {
  // Sample data for purchase indents
  const indents = [
    { id: 'PI-001', date: '2023-06-15', supplier: 'ABC Supplies', status: 'Approved', items: 12 },
    { id: 'PI-002', date: '2023-06-18', supplier: 'XYZ Manufacturing', status: 'Pending', items: 8 },
    { id: 'PI-003', date: '2023-06-20', supplier: 'Global Distributors', status: 'Rejected', items: 5 },
  ];

  return (
    <div>
      <h2 className="title">Procurement</h2>
      <p className="description">Manage purchase indents and procurement orders</p>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
        </div>
        <div>
          <button className="btn">Create Purchase Indent</button>
          <button className="btn" style={{ marginLeft: '10px' }}>View Suppliers</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Purchase Indents</h3>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Indent ID</th>
                <th>Date</th>
                <th>Supplier</th>
                <th>Items</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {indents.map((indent) => (
                <tr key={indent.id}>
                  <td>{indent.id}</td>
                  <td>{indent.date}</td>
                  <td>{indent.supplier}</td>
                  <td>{indent.items}</td>
                  <td>
                    <span 
                      className={`badge ${
                        indent.status === 'Approved' ? 'badge-success' : 
                        indent.status === 'Rejected' ? 'badge-error' : 'badge-warning'
                      }`}
                    >
                      {indent.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Create New Purchase Indent</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Supplier</label>
            <select className="form-control">
              <option>Select Supplier</option>
              <option>ABC Supplies</option>
              <option>XYZ Manufacturing</option>
              <option>Global Distributors</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Request Date</label>
            <input type="date" className="form-control" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          
          <button className="btn">Add Items</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseIndents;
