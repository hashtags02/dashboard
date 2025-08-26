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
  const total = pieData.reduce((sum, d) => sum + d.value, 0);
  const working = pieData.find(d => d.name === 'Working')?.value || 0;
  const percent = Math.round((working / total) * 100);
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
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{percent}%</div>
            <div style={{ fontSize: 12, color: '#bbb' }}>Working</div>
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
