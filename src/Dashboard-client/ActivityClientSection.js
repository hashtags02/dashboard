import React from 'react';
import './ActivityClientSection.css';
import TopClients from './TopClients'; // ✅ Import the separate TopClients component

const ActivityClientSection = () => {
  return (
    <div className="activity-client-wrapper">
      {/* Left: Recent Activity */}
      <div className="recent-activity-section">
        <h3>Recent Activity</h3>
        <table className="activity-table">
          <thead>
            <tr>
              <th>COMPONENT</th>
              <th>Device ID</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                <td>New Device Registered</td>
                <td>P-10V</td>
                <td>2 mins ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Top Clients - now imported as a component */}
      <TopClients />
    </div>
  );
};

export default ActivityClientSection;
