import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaCheckCircle, FaMoneyCheckAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo-text">Swayam<span>you</span></h1>
      <ul>
        <li className="active"><FaHome className="icon" /> <span>Dashboard</span></li>
        <li><FaUser className="icon" /> <span>End-users</span></li>
        <li><FaCheckCircle className="icon" /> <span>Verification</span></li>
        <li><FaMoneyCheckAlt className="icon" /> <span>Subscriptions</span></li>
      </ul>
    </div>
  );
}

export default Sidebar;
