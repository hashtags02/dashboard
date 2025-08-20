import React from 'react';
import './Charts.css';
import Verification from './Verification';
import Device from './Device';

function Charts() {
  return (
    <div className="charts-wrapper">
      <Verification />
      <Device />
    </div>
  );
}

export default Charts;
