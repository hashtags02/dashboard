import React from "react";
import "./ActivityClientSection.css";

function ActivityClientSection() {
  return (
    <div className="bottom">
      <div className="recent">
        <h3>Recent Activity</h3>
        <table>
          <thead>
            <tr><th>COMPANIES</th><th>EVENT ID</th><th>TIME</th></tr>
          </thead>
          <tbody>
            <tr><td>New Device Registered</td><td>P-107V</td><td>2 mins ago</td></tr>
            <tr><td>New Device Registered</td><td>P-107V</td><td>2 mins ago</td></tr>
          </tbody>
        </table>
      </div>
      <div className="clients">
        <h3>Top Clients</h3>
        <ul>
          <li>Acme Corporation</li>
          <li>Global Company</li>
          <li>Server Paymental</li>
          <li>Blockval</li>
          <li>Rocketwhiz</li>
          <li>System</li>
        </ul>
      </div>
    </div>
  );
}

export default ActivityClientSection;
