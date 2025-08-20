import React from 'react';
import './Device.css';
import { PieChart, Pie, Cell } from 'recharts';

const pieData = [
  { name: 'Working', value: 40 },
  { name: 'Maintenance', value: 20 },
  { name: 'Offline', value: 40 },
];

const COLORS = ['#C73EF3', '#31D6FB', '#fb07be'];

function Device() {
  return (
    <div className="device-section">
      <h3>Device Update</h3>
      <div className="device-chart-container">
        <PieChart width={250} height={250}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

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
