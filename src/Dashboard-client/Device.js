import React from 'react';
import './Device.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Working', value: 40 },
  { name: 'Maintenance', value: 20 },
  { name: 'Offline', value: 40 },
];

const COLORS = ['#E879F9', '#3B82F6', '#1E40AF'];

function Device() {
  return (
    <div className="device-section">
      <h3>Device Update</h3>
      <div className="device-chart-container">
        <div style={{ position: 'relative', width: 250, height: 250 }}>
          <PieChart width={250} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="chart-center-text">
            <div className="percentage">40%</div>
            <div className="label">20%</div>
          </div>
        </div>

        <ul className="legend">
          <li><span className="dot purple"></span>Working</li>
          <li><span className="dot blue-light"></span>Maintenance</li>
          <li><span className="dot blue-dark"></span>Offline</li>
        </ul>
      </div>
    </div>
  );
}

export default Device;
