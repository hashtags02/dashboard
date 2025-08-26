import React, { useEffect, useState } from 'react';
import './TopSection.css';
import {
  FaUsers, FaMobileAlt, FaCheckCircle, FaDollarSign,
  FaSearch, FaUserCircle, FaCog
} from 'react-icons/fa';
import {
  getClientsCount,
  getUsersCount,
  getVerificationsCount
} from '../api/api';

function TopSection() {
  const [clients, setClients] = useState(1250);
  const [users, setUsers] = useState(489);
  const [verifications, setVerifications] = useState(1250);

  useEffect(() => {
    // Keep the API calls but use default values for demo
    getClientsCount()
      .then(res => setClients(res.data || 1250))
      .catch(err => {
        console.error('Error fetching clients:', err);
        setClients(1250);
      });

    getUsersCount()
      .then(res => setUsers(res.data || 489))
      .catch(err => {
        console.error('Error fetching users:', err);
        setUsers(489);
      });

    getVerificationsCount()
      .then(res => setVerifications(res.data || 1250))
      .catch(err => {
        console.error('Error fetching verifications:', err);
        setVerifications(1250);
      });
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
            <h2>{clients.toLocaleString()}</h2>
            <p>+2 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaMobileAlt className="card-icon" />
          <div>
            <h4>Active Users</h4>
            <h2>{users}</h2>
            <p>+12 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaCheckCircle className="card-icon" />
          <div>
            <h4>Verification</h4>
            <h2>{verifications.toLocaleString()}</h2>
            <p>+2 from last month</p>
          </div>
        </div>

        <div className="card">
          <FaDollarSign className="card-icon" />
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
