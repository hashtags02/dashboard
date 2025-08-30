import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import "./Charts.css";

const lineData = [
  { name: "Jan", uv: 10, pv: 8 },
  { name: "Feb", uv: 20, pv: 15 },
  { name: "Mar", uv: 30, pv: 25 },
  { name: "Apr", uv: 40, pv: 35 },
  { name: "May", uv: 35, pv: 20 },
  { name: "Jun", uv: 25, pv: 18 },
  { name: "Jul", uv: 30, pv: 28 },
  { name: "Aug", uv: 45, pv: 32 },
  { name: "Sep", uv: 50, pv: 28 },
  { name: "Oct", uv: 50, pv: 20 },
  { name: "Nov", uv: 48, pv: 15 },
  { name: "Dec", uv: 30, pv: 12 }
];

const pieData = [
  { name: "Working", value: 40 },
  { name: "Maintenance", value: 20 },
  { name: "Offline", value: 40 }
];

const COLORS = ["#8B2EF5", "#1A40CF", "#17D2F3"];

function Charts() {
  return (
    <div className="charts">
      {/* Line Chart */}
      <div className="chart-box">
        <h3>Verification Activities</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3f3a5e" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#FF5CC0" strokeWidth={2} />
            <Line type="monotone" dataKey="pv" stroke="#8B2EF5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart-box">
        <h3>Device Update</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
