import React from "react";
import { FaUsers, FaMobileAlt, FaCheckCircle, FaChartLine, FaSearch, FaUserCircle, FaCog } from "react-icons/fa";
import "./TopSection.css";

function TopSection() {
  return (
    <div className="top-section">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Type here..." />
        </div>
        <div className="top-icons">
          <FaUserCircle className="icon" />
          <FaCog className="icon" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="cards">
        <div className="card"><FaUsers className="card-icon" /><div><h4>Total Clients</h4><h2>1,250</h2><p>+2 from last month</p></div></div>
        <div className="card"><FaMobileAlt className="card-icon" /><div><h4>Active Users</h4><h2>489</h2><p>+12 from last month</p></div></div>
        <div className="card"><FaCheckCircle className="card-icon" /><div><h4>Verification</h4><h2>1,250</h2><p>+2 from last month</p></div></div>
        <div className="card"><FaChartLine className="card-icon" /><div><h4>Revenue</h4><h2>$125000</h2><p>15% increase</p></div></div>
      </div>
    </div>
  );
}

export default TopSection;
