import React from "react";
import { FaTachometerAlt, FaUsers, FaCheckCircle, FaCreditCard } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        swayam<span>you</span>
      </div>
      <ul className="menu">
        <li className="active"><FaTachometerAlt /> Dashboard</li>
        <li><FaUsers /> End-User</li>
        <li><FaCheckCircle /> Verification</li>
        <li><FaCreditCard /> Subscription</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
