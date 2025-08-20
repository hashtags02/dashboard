import React, { useEffect, useState } from 'react';
import './TopSection.css';
import {
  FaUsers, FaMobileAlt, FaCheckCircle, FaChartLine,
  FaSearch, FaUserCircle, FaCog
} from 'react-icons/fa';
import {
  getClientsCount,
  getUsersCount,
  getVerificationsCount
} from '../api/api'; // ✅ Corrected path here

function TopSection() {
  const [clients, setClients] = useState(null);
  const [users, setUsers] = useState(null);
  const [verifications, setVerifications] = useState(null);

  useEffect(() => {
    getClientsCount()
      .then(res => setClients(res.data))
      .catch(err => console.error('Error fetching clients:', err));

    getUsersCount()
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));

    getVerificationsCount()
      .then(res => setVerifications(res.data))
      .catch(err => console.error('Error fetching verifications:', err));
  }, []);

  return (
    <div className="top-section">
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

      <div className="cards">
        <div className="card">
          <FaUsers className="card-icon" />
          <div>
            <h4>Total Clients</h4>
            <h2>{clients !== null ? clients : 'Loading...'}</h2>
            <p>+2 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaMobileAlt className="card-icon" />
          <div>
            <h4>Active Users</h4>
            <h2>{users !== null ? users : 'Loading...'}</h2>
            <p>+12 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaCheckCircle className="card-icon" />
          <div>
            <h4>Verification</h4>
            <h2>{verifications !== null ? verifications : 'Loading...'}</h2>
            <p>+2 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaChartLine className="card-icon" />
          <div>
            <h4>Revenue</h4>
            <h2>$125000</h2>
            <p>15% increase from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
