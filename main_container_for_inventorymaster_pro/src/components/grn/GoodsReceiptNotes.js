import React from 'react';

/**
 * Goods Receipt Notes component for managing incoming inventory.
 * Handles the receipt and documentation of goods from suppliers.
 */
// PUBLIC_INTERFACE
const GoodsReceiptNotes = () => {
  // Sample GRN data
  const goodsReceipts = [
    { id: 'GRN-001', date: '2023-06-22', poRef: 'PO-082', supplier: 'ABC Supplies', status: 'Completed' },
    { id: 'GRN-002', date: '2023-06-23', poRef: 'PO-083', supplier: 'XYZ Manufacturing', status: 'Pending Verification' },
    { id: 'GRN-003', date: '2023-06-25', poRef: 'PO-085', supplier: 'Global Distributors', status: 'Completed' },
  ];

  return (
    <div>
      <h2 className="title">Goods Receipt Notes</h2>
      <p className="description">Manage and process incoming inventory</p>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
        </div>
        <div>
          <button className="btn">Create New GRN</button>
          <button className="btn" style={{ marginLeft: '10px' }}>Check Expected Deliveries</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent GRNs</h3>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>GRN ID</th>
                <th>Date</th>
                <th>PO Reference</th>
                <th>Supplier</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {goodsReceipts.map((grn) => (
                <tr key={grn.id}>
                  <td>{grn.id}</td>
                  <td>{grn.date}</td>
                  <td>{grn.poRef}</td>
                  <td>{grn.supplier}</td>
                  <td>
                    <span 
                      className={`badge ${
                        grn.status === 'Completed' ? 'badge-success' : 'badge-warning'
                      }`}
                    >
                      {grn.status}
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
          <h3 className="card-title">Create New GRN</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Purchase Order Reference</label>
            <select className="form-control">
              <option>Select PO Reference</option>
              <option>PO-086</option>
              <option>PO-087</option>
              <option>PO-088</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Receipt Date</label>
            <input type="date" className="form-control" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Received By</label>
            <input type="text" className="form-control" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          
          <button className="btn">Proceed to Item Verification</button>
        </div>
      </div>
    </div>
  );
};

export default GoodsReceiptNotes;
