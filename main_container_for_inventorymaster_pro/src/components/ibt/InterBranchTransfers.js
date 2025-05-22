import React from 'react';

/**
 * Inter-Branch Transfers component for managing inventory movement between locations.
 * Handles the creation, tracking, and completion of transfers between branches.
 */
// PUBLIC_INTERFACE
const InterBranchTransfers = () => {
  // Sample IBT data
  const transfers = [
    { id: 'IBT-001', date: '2023-06-20', origin: 'Branch A', destination: 'Branch B', items: 8, status: 'Completed' },
    { id: 'IBT-002', date: '2023-06-23', origin: 'Branch C', destination: 'Branch A', items: 5, status: 'In Transit' },
    { id: 'IBT-003', date: '2023-06-25', origin: 'Branch A', destination: 'Branch D', items: 12, status: 'Pending Dispatch' },
  ];

  return (
    <div>
      <h2 className="title">Inter-Branch Transfers</h2>
      <p className="description">Manage inventory transfers between branches</p>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
        </div>
        <div>
          <button className="btn">New Transfer</button>
          <button className="btn" style={{ marginLeft: '10px' }}>View Transit Items</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Transfers</h3>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>IBT ID</th>
                <th>Date</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Items</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((transfer) => (
                <tr key={transfer.id}>
                  <td>{transfer.id}</td>
                  <td>{transfer.date}</td>
                  <td>{transfer.origin}</td>
                  <td>{transfer.destination}</td>
                  <td>{transfer.items}</td>
                  <td>
                    <span 
                      className={`badge ${
                        transfer.status === 'Completed' ? 'badge-success' : 
                        transfer.status === 'In Transit' ? 'badge-warning' : 'badge-error'
                      }`}
                    >
                      {transfer.status}
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
          <h3 className="card-title">Create New Transfer</h3>
        </div>
        <div>
          <div className="form-group">
            <label className="form-label">Origin Branch</label>
            <select className="form-control">
              <option>Select Origin</option>
              <option>Branch A</option>
              <option>Branch B</option>
              <option>Branch C</option>
              <option>Branch D</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Destination Branch</label>
            <select className="form-control">
              <option>Select Destination</option>
              <option>Branch A</option>
              <option>Branch B</option>
              <option>Branch C</option>
              <option>Branch D</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Expected Dispatch Date</label>
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

export default InterBranchTransfers;
