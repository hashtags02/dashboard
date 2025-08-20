import React from 'react';
import './Verification.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const lineData = [
  { name: 'Jan', purple: 10, blue: 8 },
  { name: 'Feb', purple: 18, blue: 15 },
  { name: 'Mar', purple: 25, blue: 20 },
  { name: 'Apr', purple: 35, blue: 28 },
  { name: 'May', purple: 30, blue: 25 },
  { name: 'Jun', purple: 20, blue: 28 },
  { name: 'Jul', purple: 15, blue: 30 },
  { name: 'Aug', purple: 22, blue: 35 },
  { name: 'Sep', purple: 28, blue: 32 },
  { name: 'Oct', purple: 25, blue: 38 },
  { name: 'Nov', purple: 20, blue: 40 },
  { name: 'Dec', purple: 15, blue: 40 },
];

const Verification = () => {
  return (
    <div className="verification-section">
      <h3>Verification Activities</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2c2f4a" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e2146',
              border: 'none',
              borderRadius: '10px',
              color: '#fff'
            }}
            labelStyle={{ color: '#ccc' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="purple"
            stroke="#C73EF3"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#07B8FB"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Verification;
